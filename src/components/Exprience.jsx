import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
import Details from './details'

const Exprience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
      {
        target: ref,
        offset: ["start end", "center start"]
      }
    )
  return (
    <div className='my-32 text-center'>
      <h1 className='text-4xl text-dark font-bold capitalize mb-10 lg:text-7xl'>Exprience</h1>

      <div ref={ref} className='w-full mx-auto relative space-y-5'>

        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />

        <ul>
            <Details 
            position="Front-End Intern" company="dammy.org"
            companyLink="www.dammy.org"
            year="2023 - present" address="CA"
            workDetails="Worked on the UI with React & Tailwind"
            />
        </ul>
        <ul>
            <Details 
            position="Front-End Intern" company="dammy.org"
            companyLink="www.dammy.org"
            year="2023 - present" address="CA"
            workDetails="Worked on the UI with React & Tailwind"
            />
        </ul>
        <ul>
            <Details 
            position="Front-End Intern" company="dammy.org"
            companyLink="www.dammy.org"
            year="2023 - present" address="CA"
            workDetails="Worked on the UI with React & Tailwind"
            />
        </ul>
        <ul>
            <Details 
            position="Front-End Intern" company="dammy.org"
            companyLink="www.dammy.org"
            year="2023 - present" address="CA"
            workDetails="Worked on the UI with React & Tailwind"
            />
        </ul>
        <ul>
            <Details 
            position="Front-End Intern" company="dammy.org"
            companyLink="www.dammy.org"
            year="2023 - present" address="CA"
            workDetails="Worked on the UI with React & Tailwind"
            />
        </ul>
        <ul>
            <Details 
            position="Front-End Intern" company="dammy.org"
            companyLink="www.dammy.org"
            year="2023 - present" address="CA"
            workDetails="Worked on the UI with React & Tailwind"
            />
        </ul>
      </div>
    </div>
  )
}

export default Exprience
