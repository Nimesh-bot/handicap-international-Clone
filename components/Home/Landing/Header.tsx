import React from 'react'

import { AiOutlineRight } from 'react-icons/ai'
 
const Header = () => {
  return (
    <div className='w-full flex items-start justify-between px-4'>
        <div className='gap-x-4 items-center hidden lg:flex'>
            <AiOutlineRight className='text-[36px] rotate-180'/>
            <div className='flex flex-col'>
                <p>Previous Page</p>
                <h2>Phillipines</h2>
            </div>
        </div>
        
        <div className='w-full lg:w-1/2 flex flex-col items-center gap-y-4'>
            <div className='flex flex-col items-center'>
                <p className='text-xs uppercase'>Our Actions</p>
                <h1 className='text-primary text-[36px] lg:text-[45px]'>Nepal</h1>
            </div>

            <h2 className='text-primary text-center'>In Nepal, HI aims to enhance access to education for all children, including children with disabilities, and to enable people with injuries or disabilities to benefit from rehabilitation sessions and inclusion services.</h2>
        </div>

        <div className='hidden lg:flex gap-x-4 items-center'>
            <div className='flex flex-col'>
                <p>Next Page</p>
                <h2>Madagascar</h2>
            </div>
            <AiOutlineRight className='text-[36px]'/>
        </div>
    </div>
  )
}

export default Header