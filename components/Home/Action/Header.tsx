import React from 'react'

const Header = () => {
  return (
    <div className='hidden sticky top-12 lg:flex justify-center items-center border-y-[1px] border-y-fade bg-body'>
        <ul className='flex gap-x-12 py-4'>
            <li className='text-sm uppercase'>Action in process</li>
            <li className='text-sm uppercase'>Latest stories</li>
            <li className='text-sm uppercase'>Situation of the country</li>
            <li className='text-sm uppercase'>Funders</li>
        </ul>
    </div>
  )
}

export default Header