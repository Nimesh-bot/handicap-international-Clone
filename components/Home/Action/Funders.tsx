/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { fundersData } from '../../../data/FundersData'

const Funders = () => {
  return (
    <div className='flex flex-col mt-8 gap-y-4'>
        <h1 className='text-[36px] lg:text-[45px] font-normal text-primary'>Funders</h1>
        <div className='flex flex-col'>
            {
                fundersData.map((funder, index) => (
                    <div key={index} className='flex flex-col gap-y-4 md:flex-row gap-x-16 border-b-[2px] border-b-primary py-4 items-center'>
                        <img src={funder.image} alt={funder.name} className='w-[300px] h-auto mix-blend-multiply' />
                        <div className='flex-1'>
                            <h2 className='font-medium text-primary'>{funder.name}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Funders