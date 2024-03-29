import { useEffect, useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Skills } from '../index'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Exprience from '@/components/Exprience'
import Transition from '@/components/Transition'



const about = () => {

    const Animatedtxt = ({ value }) => {
        const ref = useRef(null);

        const motionValue = useMotionValue(0);
        const spring = useSpring({ motionValue, duration: 2000 });
        const isInView = useInView(ref);

        useEffect(() => {
            console.log('Effect triggered!');
            if (isInView) {
                motionValue.set(value)
            }
        }, [isInView, value, motionValue])

        useEffect(() => {
            spring.on("change", (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0);
                }
            })
        }, [spring, value])

        return <span ref={ref}></span>
    }

    return (
        <>
            <Head>
                <title>Saber | About Page</title>
                <meta name="viewport" content="any"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Kanit:ital,wght@1,500&family=Lato:ital,wght@1,900&family=Noto+Sans+Mahajani&family=Rubik:ital,wght@1,700&family=Ubuntu:ital,wght@1,700&display=swap" rel="stylesheet" />
            </Head>
            <Transition />
            <main>
                <AnimatedText text="Turn Ideas Into Reality." />
                <div className='grid w-full grid-cols-8 gap-10 mt-5'>
                    <div className='col-span-3 flex flex-col items-start justify-start ml-6'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark'>Biography</h2>
                        <p className='font-medium'>Hello! I'm Saber a passionate frontend developer, web3
                            enthusiast, and dedicated community manager. With a strong background
                            in web development, I specialize in creating engaging and
                            user-friendly interfaces that bring ideas to life</p>
                        <p className='font-medium my-4'> I thrive on
                            transforming design concepts into functional and visually appealing
                            experiences, ensuring a smooth user journey across devices and
                            platforms. In addition to my expertise in frontend development, I
                            have ventured into the exciting world of web3 development. With a
                            keen interest in blockchain technology and decentralized
                            applications, I have gained hands-on experience in utilizing
                            frameworks like Ethereum and Solidity to build decentralized
                            applications (DApps) and smart contracts that leverage the power of
                            the blockchain.</p>
                        <p className='font-medium my-4'>Alongside my technical skills, I embrace the role of
                            a community manager. I understand the significance of building and
                            nurturing vibrant communities around projects and products. By
                            fostering open communication channels, organizing engaging events,
                            and facilitating discussions, I strive to create inclusive and
                            collaborative environments where individuals can connect, share
                            ideas, and contribute to the growth of the community. Driven by
                            curiosity and a passion for innovation, I am constantly exploring
                            emerging technologies and trends in the web development landscape. I
                            believe in continuous learning, staying adaptable, and embracing new
                            challenges to deliver meaningful and impactful solutions.</p>
                    </div>
                    <div className='relative col-span-3 h-auto rounded-2xl border-dark border-solid border-2 bg-light p-8 w-full'>
                        <div className='absolute top-0 left-3 w-full h-full rounded-[2rem] bg-dark overflow-hidden -z-10' />
                        <img src='/Images/techsaber.png' className='w-auto h-auto bg-dark' alt='saber' />
                    </div>

                    <div className='flex flex-col space-y-0 items-center justify-evenly'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className=' font-bold text-4xl lg:text-7xl'>
                                <Animatedtxt value="50" />0+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75  text-center'>Satisfied Client</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className=' font-bold text-4xl lg:text-7xl'>15+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 text-center'>Completed Projects</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className=' font-bold text-4xl lg:text-7xl'>1+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 text-center '>Year's Of Exprience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Exprience />
            </main>
        </>
    )
}

export default about
