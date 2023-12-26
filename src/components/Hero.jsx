import React from 'react'

const Hero = ({ text, className }) => {
  return (
    <div className={`${className} `}>
      {text}
    </div>
  )
}

export default Hero
