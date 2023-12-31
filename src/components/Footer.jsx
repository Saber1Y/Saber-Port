import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-solid border-dark font-medium text-lg '>
      <div className='flex items-center justify-between m-2'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className='flex flex-col'>
        <span>Buy me a Coffee: 0x11f7eaC93C9DD552DFD657BE52007A25E200f356</span>
        <Link href="https://www.buymeacoffee.com/saber1y">Buy me Coffee ☕️</Link>
        </div>
        <p>Built By Saber <span className='text-2xl'>&#9825;</span></p>
      </div>
    </div>
  )
}

export default Footer
