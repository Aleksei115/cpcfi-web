UPDATE public.testimonie_aux 
SET testimonie_img = pg_read_binary_file('D:\CPCFI\web-page\assets\testimoniesImg\image28.jpg') 
WHERE name = 'Vicky'

   
DROP TABLE public.testimonie_aux
CREATE TABLE "testimonie_aux" 
( "id"  SERIAL PRIMARY KEY,      
    "name" VARCHAR(25) NOT NULL,      
    "description" VARCHAR(600) NOT NULL,      
    "testimonie_img" BYTEA,      
    "generation_id" INTEGER NOT NULL,      
    "active" BOOLEAN NOT NULL    
);

/* 2023-02-09 14:37:18 [14 ms] */ INSERT INTO public.testimonie_aux(name,description,generation_id,active) VALUES ('Vicky', 'El haber sido parte del club fue una de las mejores decisiones de los',1,true)
/* 2023-02-09 14:37:46 [10 ms] */ SELECT *  FROM public.testimonie_aux