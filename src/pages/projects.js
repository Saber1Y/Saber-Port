import AnimatedText from '@/components/AnimatedText'
import Transition from '@/components/Transition'
import Head from 'next/head'
import React from 'react'
import { FeaturedProject, Project } from '../index'
import dappazon1 from '../../public/images/project/dappazon.png';
import starbucks from '../../public/images/project/starbucks.jpg';
import Geritch from '../../public/images/project/Geritch.jpg';
import quizzer from '../../public/images/project/quizzer.png';
import { BiCodeAlt } from 'react-icons/bi';

const projects = () => {
    return (
        <>
            <Head>
                <title>Saber | Project Page</title>
                <meta name="viewport" content="any"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
                            summary="Decentralized Version of Amazon, built with React (CRA) and Vanilla CSS for styling on the frontend. On the backend, it utilizes Solidity for smart contract development, Hardhat for Ethereum development environment setup, and ethers.js for interacting with the Ethereum blockchain."
                            github="github.com/saber1y/dappazon"
                            link="https://dappazon-nu.vercel.app"
                            stack={
                                <ul className="my-2 list-style-disc">
                                    <li className='uppercase'>React (cra)</li>
                                    <li className='uppercase'>Css 3</li>
                                    <li className='uppercase'>Solidity</li>
                                    <li className='uppercase'>Ethers.js</li>
                                    <li className='uppercase'>Hardhat</li>
                                    <li className='uppercase'>Animation: Framer-motion</li>
                                </ul>
                            }
                        />

                    </div>

                    <div className='col-span-6'>
                        <Project img={starbucks}
                            title="Starbucks Clone"
                            summary="Starbucks clone project developed using HTML, CSS, and Vanilla CSS, showcasing proficiency in front-end web development. Implemented pixel-perfect design to closely mimic the original Starbucks website, emphasizing attention to detail and design fidelity. Applied modern CSS techniques such as flexbox and grid layouts for responsive and visually appealing UI/UX."
                            github="github.com/saber1y/dappazon"
                            link="https://star-bucks-clone-website-6xay.vercel.app"
                            stack={
                                <ul className='my-2 list-style-disc'>
                                    <li className='uppercase'>HTMmL 5</li>
                                    <li className='uppercase'>Css 3</li>
                                    <li className='uppercase'>JavaScript</li>
                                </ul>
                            }
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project img={Geritch}
                            title="Geritch"
                            summary="A demo fine dining website designed and developed to showcase restaurant concepts and culinary experiences. Crafted using modern web technologies including HTML5, CSS3, and JavaScript, demonstrating expertise in front-end web development. Implemented a visually stunning and responsive design, ensuring seamless user experience across devices."
                            github="https://github.com/Saber1Y/RESTAURANT-WEB"
                            link="https://restaurant-web-mu.vercel.apps"
                            stack={
                                <ul className='my-2 list-style-disc'>
                                    <li className='uppercase'>React (VITE)</li>
                                    <li className='uppercase'>Tailwind Css</li>
                                </ul>
                            }

                        />
                    </div>

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
                        <Project img={quizzer}
                            title="Quizzer"
                            summary="An engaging quiz application designed with a user-friendly interface, integrated timer, and dynamic scoring system to challenge users of all levels. Featuring randomized questions to keep each session fresh and exciting, this application caters to trivia enthusiasts, students, and anyone looking for a fun way to test their knowledge. Developed with HTML, CSS, and JavaScript for the frontend, the application boasts a sleek design achieved with Vanilla CSS."
                            github="https://github.com/Saber1Y/Quiz-GO"
                            link="https://quiz-go.vercel.app"
                            stack={
                                <ul className='my-2 list-style-disc'>
                                    <li className='uppercase'>Html 5</li>
                                    <li className='uppercase'>Css 3</li>
                                    <li className='uppercase'>JavaScript</li>
                                </ul>
                            }

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

                </div>

            </section>
        </>
    )
}

export default projects
