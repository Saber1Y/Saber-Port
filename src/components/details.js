import React, { useRef } from 'react'
import Liicon from './Liicon'

const Details = ({ position, company, companyLink, address, year, workDetails }) => {
    const ref = useRef(null);

  return ( 
  <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between' ref={ref}>
    <Liicon reference={ref} />
    <div>
      <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink} target='_blank' className='capitalize text-blue-700'>@{company}</a></h3>
      <span className='capitalize font-medium text-dark/70'>
        {year} | {address}
      </span>
      <p className='font-meduim w-full'>{workDetails}</p>
    </div>
  </li>
  )
}

export default Details
