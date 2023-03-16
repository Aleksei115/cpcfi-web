// import { z } from "zod";

// import { type Testimonie } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const testimonieRouter = createTRPCRouter({

    getAllTestimonies: publicProcedure.query( async ({ ctx }) => {

        try {
            
            const arrayTestimonies = await ctx.prisma.testimonie_aux.findMany()
            
            // return arrayTestimonies.map(testimonie => {
            //     if(testimonie.testimonie_img !== null)
            //         testimonie.testimonie_img = new Uint8Array(testimonie.testimonie_img) as Buffer;
            //     return testimonie;
            // })

            return arrayTestimonies

        } catch (error) {
            console.log(error)
            return undefined
        }


    }),

});
