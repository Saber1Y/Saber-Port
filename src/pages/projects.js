import AnimatedText from '@/components/AnimatedText'
import Transition from '@/components/Transition'
import Head from 'next/head'
import React from 'react'
import { FeaturedProject, Project } from '../index'
import dappazon1 from '../../public/images/project/dappazon.png'

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

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            img={dappazon1}
                            title="Dappazon"
                            summary="Decentralized Version of Amazon, built with React(CRA), VanillaCss for styling and for 
                            Solidity, Hardhat,ethers.js all for backend functionality "
                            github="github.com/saber1y/dappazon"
                            link="/"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project img={dappazon1}
                            title="Dappazon"
                            summary="Decentralized Version of Amazon, built with React(CRA), VanillaCss for styling and for 
                            Solidity, Hardhat,ethers.js all for backend functionality "
                            github="github.com/saber1y/dappazon"
                            link="/" />
                    </div>
                    <div className='col-span-6'>
                        project-2
                    </div>

                    <div className='col-span-12'>
                        FeaturedProject
                    </div>

                    <div className='col-span-6'>
                        project-3
                    </div>
                    <div className='col-span-6'>
                        project-4
                    </div>

                </div>

            </section>
        </>
    )
}

export default projects
