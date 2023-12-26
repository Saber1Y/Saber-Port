import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-solid border-dark font-medium text-lg '>
      <div className='flex items-center justify-between m-2'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <span>Buy me a Coffee: 0x11f7eaC93C9DD552DFD657BE52007A25E200f356</span>
        <p>Built By Saber</p>
      </div>
    </div>
  )
}

export default Footer
