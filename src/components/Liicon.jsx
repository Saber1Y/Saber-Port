import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const Liicon = ({ reference }) => {

    const {scrollYProgress} = useScroll(
        {
          target: reference,
          offset: ["center end", "center center"]
        }
      )

  return (
    <figure className='absolute left-0 stroke-dark ml-48'>
        <svg width="75" viewBox='0 0 100 100' className='-rotate-90'>
            <circle  cx="75" cy="50" r="20" className='stroke-blue-500 stroke-1 fill-none' />
            <motion.circle  cx="75" cy="50" r="20" className='stroke-[5px] fill-none' style={{pathLength: scrollYProgress}} />
            <circle  cx="75" cy="50" r="20" className='stroke-1 fill-blue-500 animate-pulse' />
        </svg>
    </figure>
  )
}

export default Liicon
