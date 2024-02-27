import AnimatedText from '@/components/AnimatedText'
import Transition from '@/components/Transition'
import Head from 'next/head'
import React from 'react'
import { FeaturedProject } from '../index'

const projects = () => {
    return (
        <>
            <Head>
                <title>Saber | Project Page</title>
                <meta name="viewport" content="any"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Kanit:ital,wght@1,500&family=Lato:ital,wght@1,900&family=Noto+Sans+Mahajani&family=Rubik:ital,wght@1,700&family=Ubuntu:ital,wght@1,700&display=swap" rel="stylesheet" />
            </Head>
            <Transition />
        <section className='w-full mb-14 flex flex-col items-center justify-center'>
            <AnimatedText text="Crafting Tommorow's Solution" />

         <div className='grid grid-col-12 gap-6'>
            {/* <FeaturedProject /> */}
         </div>

        </section>
        </>
    )
}

export default projects
