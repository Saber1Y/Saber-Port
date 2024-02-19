import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";



const MotionLink = motion(Link)


const Logo = () => {
  return (
<div className='flex items-center justify-center  space-x-4'>
  <MotionLink
    href="./"
    className='w-32 h-18 bg-dark text-light rounded-md text-2xl font-bold'
    whileHover={{
      backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
      transition: { duration: 1, repeat: Infinity }
    }}
  >
    <span className='flex items-center justify-center'>
      <FaAngleLeft />
      SABER
      <FaAngleRight />
    </span>
  </MotionLink>
</div>

  )
}

export default Logo
