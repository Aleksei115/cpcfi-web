import { createTRPCRouter } from "./trpc";
import { compilerRouter,  sponsorRouter,  testimonieRouter } from './routers'


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  testimonie  : testimonieRouter,
  compiler    : compilerRouter,
  sponsor     : sponsorRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
