import React from 'react'

const Details = ({ position, company, address, year, workDetails }) => {
  return ( <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <div>
      <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; @{company}</h3>
      <span className='capitalize font-medium text-dark/70'>
        {year} | {address}
      </span>
      <p className='font-meduim w-full'>{workDetails}</p>
    </div>
  </li>
  )
}

export default Details
