import React from 'react'

const Hero = ({ text, className }) => {
  return (
    <div className={`${className} w-full h-full inline-block z-0 bg-light p-32`}>
      {text}
    </div>
  )
}

export default Hero
