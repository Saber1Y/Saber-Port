import Head from 'next/head'
import Image from 'next/image'
import { Hero, Hire } from '../index'
import Saber from '../../public/images/profile/Saber.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function Home() {

  const animate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  const singleWord = {
    initial: {
      opacity: 1,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      },
    },
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Kanit:ital,wght@1,500&family=Lato:ital,wght@1,900&family=Noto+Sans+Mahajani&family=Rubik:ital,wght@1,700&family=Ubuntu:ital,wght@1,700&display=swap" rel="stylesheet" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <motion.div className='w-full h-full inline-block z-0 bg-light p-8 lg:p-32 pt-0' variants={singleWord} initial="initial" animate="animate">
          <div className='flex items-center justify-between  w-full'>
            <div className='w-full lg:w-2/3'>
              <motion.h2 className='text-3xl leading-7 tracking-tight lg:text-5xl' variants={animate} initial="initial" animate="animate">Hello 👋🏾, I'm Saber </motion.h2>
              <p className="font-extrabold  text-3xl pt-3 leading-6 tracking-tighter font-mono no-underline sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                <TypeAnimation
                  sequence={[
                    'A Passionate Full Stack Web3 Engineer',
                    1000,
                    'A Community Manager',
                    1000,
                    'A Listening Manager',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </p>
              <p className='w-full text-2xl font-semibold opacity-80 py-2'>
                I'm a highly motivated Full Stack Web3 Engineer with a deep passion for crafting innovative and efficient solutions. My expertise lies in building robust applications that leverage the latest web technologies, ensuring a seamless and interactive user experience. I thrive on challenges and am dedicated to staying at the forefront of emerging trends in the ever-evolving world of web development.
              </p>
              <div className='flex items-center space-x-4'>
                <Link type="button" className="text-white bg-gradient-to-r to-emerald-600 from-sky-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-transparent" href="/resume.pdf" target={'_blank'} >
                  Resume
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
                <Link type="button" className="text-white bg-gradient-to-r to-emerald-600 from-sky-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="mailto:akintobiayodeji1@gmail.com" target={'_blank'} >
                  <svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                  Mail
                </Link>
              </div>
            </div>
            <div className='lg:block w-1/2 ml-10' >
              <Image src={Saber} alt='Saber' className='w-full h-full ml-10' />
            </div>
          </div>
        </motion.div>
        <Hire />
      </main>
    </>
  )
}
