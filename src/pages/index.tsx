
// import styles from "./index.module.css";
// import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

import { useState, useEffect } from 'react';
import { type NextPage } from "next";
import { MainLayout } from '../layouts'
import { CpcfiProfile,BannerSection, TestimoniesSection, SponsorsSection } from '../components/landing'
import { api } from "../utils/api";
import { type testimonie_aux } from "@prisma/client";


const images: string[] | [] = []


const Home: NextPage = () => {

  const [testimonies, setTestimonies] = useState<testimonie_aux[] | undefined>(undefined)

  const testimoniesQuery = api.testimonie.getAllTestimonies.useQuery()

  useEffect(() => {

    setTestimonies(testimoniesQuery.data)

  }, [testimoniesQuery.data, testimoniesQuery.isLoading])
  

  return (
    <MainLayout>
      <BannerSection slides={images}/>
      <CpcfiProfile />
      {

        testimonies !== undefined 
        &&
        <TestimoniesSection testimonies={testimonies || []}/>

      }
      <SponsorsSection />
    </MainLayout>
  )
};







export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className={styles.authContainer}>
//       <p className={styles.showcaseText}>
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className={styles.loginButton}
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
