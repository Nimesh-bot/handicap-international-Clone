import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 flex justify-center items-center border-b-[1px] border-b-fade'>
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