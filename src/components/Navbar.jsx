import Link from 'next/link'
import React from 'react'
import { Logo } from '../index'

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between' >
      <nav>
        <Link href='./'>Home</Link>
        <Link href='./'>About</Link>
        <Link href='./'>Projects</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="" target={'_blank'}>X</Link>
        <Link href="" target={'_blank'}>Linkedin</Link>
        <Link href="" target={'_blank'}>Github</Link>
      </nav>
    </header>
  )
}

export default Navbar
