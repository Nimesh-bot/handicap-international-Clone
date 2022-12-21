/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrimaryButton } from '../../Buttons'

const Divider = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-[300px] mt-8'>
        <div className='flex-1 h-full'>
            <img src='/images/globe.png' alt='Globe Image' className='w-full h-full object-cover' />
        </div>
        <div className='bg-danger flex-1 h-full flex justify-center items-center'>
            <PrimaryButton text='SEE HI WORLDWIDE PRESENCE' />
        </div>
    </div>
  )
}

export default Divider