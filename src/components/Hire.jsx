import React from 'react'
import Image from 'next/image'
import { Circle } from '../../public/images/circle.png'
import Link from 'next/link'


const Hire = () => {
  return (
    <div className='fixed lefttttt-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <Link href="mailto:ayodejjiakintobi1@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
             text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold font- hover:bg-light 
            ' >Hire me</Link>
         </div>
    </div>
  )
}

export default Hire
