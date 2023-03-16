/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head"
import { Navbar, FooterContact, Modal } from "../../components/ui"
import styles from './MainLayout.module.scss'
import React from 'react';

// TODO: props for each page

interface Props {
    children: any
}


export const MainLayout = ({ children } : Props) => {

    return (
    <>
        <Head>
            <title>CPCFI</title>
            <meta name="robots"  content="index,follow"/>
            <meta name="description" content="Some tags are vital for SEO. Others have little or no impact on rankings. Here's every type of meta tag you need to know about.The purpose of a meta description is to reflect the essence of a page, but with more details and context."/>
        </Head>

        <Modal />

        <header>
            <Navbar />
        </header>
        
        <main className={styles['container-main']}>
            { children }
        </main>

        <footer className={styles['container-footer']}>
            <FooterContact />
        </footer>

    </>
  )
}
