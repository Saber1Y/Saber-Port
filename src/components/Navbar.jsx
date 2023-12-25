import Link from 'next/link'
import React from 'react'
import { Logo, CustomLink } from '../index'



const Navbar = () => {


  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between' >
      <nav className='space-x-6'>
        <CustomLink href='./' title="Home" />
        <CustomLink href='./' title="About"/>
        <CustomLink href='./' title="Contact" />
      </nav>
      <nav>
        <Link href="" target={'_blank'}>X</Link>
        <Link href="" target={'_blank'}>Linkedin</Link>
        <Link href="" target={'_blank'}>Github</Link>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50% ]'>
      <Logo />
      </div>
    </header>
  )
}

export default Navbar
