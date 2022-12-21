/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FlatIconButton } from '../../Buttons'

const Situation = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 items-center mt-8 h-max'>
        <div className='flex-1 flex flex-col h-full gap-y-4 border-[0.5px] border-fade p-8'>
            <div className='flex flex-col'>
                <h1 className='text-[36px] lg:text-[45px] font-normal text-primary'>Situation of the country</h1>
                <h2 className='font-normal'>Over 40% of the population lives below the poverty line.</h2>
            </div>

            <div className='flex flex-col gap-x-2'>
                <p>The livelihoods of three-quarters of the population depend on agriculture. The economic development washindered by the conflict between the government authorities and Maoist insurgents (1996-2006), who are today integrated into the democratic process. This conflict left 12,000 dead and displaced hundreds of thousands of people. It also left many veterans of the war with disabilities. Today the country is working towards democracy and is in a period of relative stability.</p>
                <p>In Nepal, disability is primarily considered a social issue. It is rarely addressed as a public health issue or taken into account in education, health and economic development. An estimated 78% of children with disabilities are not in education (Barriga, 2011) and only 1% of the population with disabilities in Nepal has access to employment.</p>
                <p>Nepal has been severely hit by COVID-19, although the situation has improved more recently.</p>
                
                <p className='text-font mt-4'>Number of HI staff members: <span className='text-fade'>83</span></p>
                <p className='text-font mt-2'>Date of programme opened: <span className='text-fade'>2000</span></p>

                <FlatIconButton text="Download the country file (pdf, 988.78 KB)" />
            </div>
        </div>

        <div className='flex-1 h-max'>
            <img src='https://www.hi.org/sn_uploads/federation/country/maps/2022_NEPAL_EN_CORRIGEE_4.png?maxw=0&maxh=0' alt='Nepal Map' className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default Situation