import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany();
  }),
  addTag: publicProcedure.input(z.object({ name: z.string() })).mutation(async ({ ctx, input }) => {
    // TODO: Swap over to createMany once we most to postgres.
    return await ctx.prisma.tag.create({ data: { name: input.name } });
  }),
});
