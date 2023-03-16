
import { z } from "zod";

import type { prospect_sponsor } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const sponsorRouter = createTRPCRouter({

    addProspectSponsor: publicProcedure
        .input(
            z.object({ 
                id: z.string().uuid().optional(),
                email   : z.string().email().max(50),
                date: z.date().optional(),
                active: z.boolean().optional()
            })
        )
        .mutation( async ({ ctx , input}) => {

            try {

                const prospect_sponsor_new = await ctx.prisma.prospect_sponsor.create(
                    {
                        data: input as unknown as prospect_sponsor,
                        select: {
                            id      : true,        
                            email   : true, 
                            date    : true,
                            active  : true                         
                        },
                    }
                )
                return prospect_sponsor_new


            } catch (error) {
                console.log(error)
                return undefined
            }


        }),

});
