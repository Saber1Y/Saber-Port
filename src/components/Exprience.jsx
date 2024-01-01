import React from 'react'
import Details from './details'

const Exprience = () => {
  return (
    <div className='my-64 text-center'>
      <h1 className='text-4xl text-dark font-bold capitalize mb-32 lg:text-7xl'>Exprience</h1>

      <div className='w-full mx-auto relative'>
        <ul>
            <Details 
            position="Front-End Intern" company="dammy.org"
            year="2023 - present" address="CA"
            workDetails="Worked on the UI with React & Tailwind"
            />
        </ul>
      </div>
    </div>
  )
}

export default Exprience
