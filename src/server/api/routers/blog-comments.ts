import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const blogCommentRouter = createTRPCRouter({
  getForPost: publicProcedure.input(z.object({ postId: z.string().cuid() })).query(({ ctx, input }) => {
    return ctx.prisma.blogComment.findMany({
      where: {
        postId: input.postId,
      },
    });
  }),
  createForPost: publicProcedure
    .input(
      z.object({
        postId: z.string().cuid(),
        userId: z.string().cuid(),
        replyToId: z.string().cuid().optional(),
        body: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.prisma.blogComment.create({
        data: {
          postId: input.postId,
          body: input.body,
          userId: input.userId,
          replyToId: input.replyToId,
        },
      });
      return 'Test comment created';
    }),
});
