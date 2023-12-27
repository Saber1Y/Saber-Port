import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                <title>Saber | About Page</title>
                <meta name="viewport" content="any"></meta>
            </Head>
            <main>
                <AnimatedText text="Translating ideas into Execution." />
                <div className='grid w-full grid-cols-8 gap-18'>
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
                    <div className='col-span-3 relative h-max rounded-2xl border-dark border-solid border-2 bg-light p-8 '>

                    </div>
                </div>
            </main>
        </>
    )
}

export default about
