import { type Tag } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const blogRotuer = createTRPCRouter({
  getById: publicProcedure.input(z.object({ id: z.string().cuid() })).query(({ ctx, input }) => {
    return ctx.prisma.blog.findUnique({
      where: {
        id: input.id,
      },
    });
  }),
  getByTags: publicProcedure.input(z.object({ tagIds: z.string().array() })).query(async ({ ctx, input }) => {
    if (!input.tagIds?.length) {
      return ctx.prisma.blog.findMany();
    }
    const tagsToQuery = await ctx.prisma.blogTag.findMany({
      where: {
        tagId: {
          in: input.tagIds,
        },
      },
    });
    return ctx.prisma.blog.findMany({
      where: {
        id: {
          in: tagsToQuery.map((blogTag) => blogTag.blogId),
        },
      },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blog.findMany();
  }),
  search: publicProcedure.input(z.object({ searchText: z.string() })).query(({ ctx, input }) => {
    return ctx.prisma.blog.findMany({
      where: {
        title: {
          startsWith: `%${input.searchText}%`,
        },
      },
    });
  }),
  create: publicProcedure
    .input(z.object({ title: z.string(), body: z.string(), blogTags: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      const tags = await ctx.prisma.tag.findMany();
      const tagNames = tags.map((tag) => tag.name);
      const newTags = input.blogTags.filter((tag) => !tagNames.includes(tag));

      const createdTags: Tag[] = [];
      if (newTags.length) {
        for (const tag of newTags) {
          const createdTag = await ctx.prisma.tag.create({ data: { name: tag } });
          createdTags.push(createdTag);
        }
      }

      const allTags = tags.concat(createdTags);
      const blogTags = allTags.filter((tag) => input.blogTags.includes(tag.name));

      console.log(blogTags);

      //todo private procedure once we have auth
      const blog = await ctx.prisma.blog.create({
        data: {
          title: input.title,
          body: input.body,
          blogTags: {
            create: blogTags.map((tag) => ({ tagId: tag.id })),
          },
        },
      });
      return blog;
    }),
});
