import { z } from "zod";
import axios  from "axios";
// import { type Testimonie } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const compilerRouter = createTRPCRouter({

    createSubmission: publicProcedure
        .input(
            z.object({ 
                srcCode: z.string(), 
            })
        )
        .query( ({ input}) => {


        

        const options = {
          method: 'POST',
          url: 'https://judge0-ce.p.rapidapi.com/submissions',
          params: {base64_encoded: 'true', fields: '*'},
          headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '22e9e26dc7msheb5cf5e3a117d8cp1fb62fjsn84023b6ab10a',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
          },
          data: `{
                "language_id":50,
                "source_code":${input.srcCode},
                "stdin":"SnVkZ2Uw"
            }`
        };
        

        axios.request(options).then(function (response) {
            console.log(response.data);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        }).catch(function (error) {
            console.error(error);
        });
        
        

    }),
    getSubmission: publicProcedure
        .input(
            z.object({ 
                tokenCode: z.string(), 
            })
        )
        .query( ({ input }) => {
            
            const options = {
                method: 'GET',
                url: `https://judge0-ce.p.rapidapi.com/submissions/${input.tokenCode}`,
                params: {base64_encoded: 'true', fields: '*'},
                headers: {
                  'X-RapidAPI-Key': '22e9e26dc7msheb5cf5e3a117d8cp1fb62fjsn84023b6ab10a',
                  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                  console.log(response.data);
              }).catch(function (error) {
                  console.error(error);
              });
        

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        
    }),


});
