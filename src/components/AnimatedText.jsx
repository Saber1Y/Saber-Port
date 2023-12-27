import React from 'react'
import { motion } from 'framer-motion'


const AnimatedText = ({ text, className }) => {

    const MoreWord = {
        initial: {
          opacity: 1,
          y: 50,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1
          },
        },
      }
     

  return (
    <motion.div className={`${className} text-3xl  font-extrabold text-dark flex items-center justify-center py-6 lg:text-5xl`} variants={MoreWord} initial="initial" animate="animate">
        <h1>{text}</h1>
    </motion.div>
  )
}


export default AnimatedText
