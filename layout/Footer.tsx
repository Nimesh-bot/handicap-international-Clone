/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FlatIconButton } from '../components/Buttons'

const Footer = () => {
  return (
    <div className='bg-primary px-8 py-4 flex flex-col gap-y-16'>
        <div className='border-b-2 border-b-white py-4'>
            <p className='text-white'>@ Sadiksha Malla / HI</p>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-center gap-8 items-center py-12'>
            <div className='w-full lg:w-1/2 flex flex-col md:flex-row gap-6 lg:border-r-[2px] lg:border-r-black px-4 items-center md:items-start'>
                <img src='/logo/logo_white.png' alt='HI Logo' className='w-[80px] h-auto md:w-auto md:h-max flex-shrink-0' />
                <div className='flex flex-col items-center md:items-start'>
                    <p className='text-white'>
                        HI is an independent and impartial aid organisation working in situations of poverty and exclusion, conflict and disaster. We work alongside people with disabilities and vulnerable populations, taking action and bearing witness in order to respond to their essential needs, improve their living conditions and promote respect for their dignity and fundamental rights.
                    </p>
                    <FlatIconButton text='Learn More' additionalIconclassName='text-white text-[24px]' additionalTextclassName='text-white hover:text-white text-lg' />
                </div>
            </div>
            <div className='w-full lg:flex-1 flex flex-col items-center md:justify-between lg:justify-start md:flex-row md:items-center gap-y-8'>
                <div className='flex flex-col flex-1 items-center'>
                    <ul className='flex flex-col items-center'>
                        <li className='uppercase text-white cursor-pointer hover:underline'>Appels D'Offres</li>
                        <li className='uppercase text-white cursor-pointer hover:underline'>Terms and Conditions</li>
                    </ul>
                </div>
                <div className='flex flex-col flex-1 items-center'>
                    <ul>
                        <li className='uppercase text-white cursor-pointer hover:underline'>Donate</li>
                        <li className='uppercase text-white cursor-pointer hover:underline'>Join Us</li>
                        <li className='uppercase text-white cursor-pointer hover:underline'>Alert Us</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-4 flex-1 items-center'>
                    <p className='uppercase text-white'>Follow Us</p>
                    <div className='flex gap-x-4'>
                        <img src='https://www.hi.org/sn_uploads/PICTOGRAMME_FACEBOOK_BLANC_76de0aa7b663186f734aa946e03e8d8a.png' alt='Facebook Icon' className='w-[24px] h-[24px]' />
                        <img src='https://www.hi.org/sn_uploads/PICTOGRAMME_TWITTER_BLANC_f35cc87a84cd97c5acf60c421d8fa1a9.png' alt='Twitter Icon' className='w-[24px] h-[24px]' />
                        <img src='https://www.hi.org/sn_uploads/PICTOGRAMME_LINKEDIN_BLANC_b32d10b48b5db98ee510404147540883.png' alt='LinkedIn Icon' className='w-[24px] h-[24px]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer