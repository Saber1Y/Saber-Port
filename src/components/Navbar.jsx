import Link from 'next/link'
import React from 'react'
import { Logo, CustomLink } from '../index'
import { GithubIcon, LinkedInIcon, XIcon } from './icons'
import { motion } from 'framer-motion'



const Navbar = () => {


  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between' >
      <nav className='space-x-6 md:text-xl'>
        <CustomLink href='./' title="Home" />
        <CustomLink href='./' title="About"/>
        <CustomLink href='./' title="Contact" />
        <CustomLink href='./' title="Projects" />
      </nav>
      <nav className='flex items-center justify-center flex-wrap space-x-3'>
        <motion.a href="" target={'_blank'} whileHover={{y:-2}} whileTap={{ scale: 0.8 }} className='w-6'><XIcon /></motion.a>
        <motion.a href="" target={'_blank'} whileHover={{y:-2}} whileTap={{ scale: 0.8 }} className='w-6'><LinkedInIcon /></motion.a>
        <motion.a href="" target={'_blank'} whileHover={{y:-2}} whileTap={{ scale: 0.8 }} className='w-6'><GithubIcon /></motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50% ]'>
      <Logo />
      </div>
    </header>
  )
}

export default Navbar
