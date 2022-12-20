/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import { BsGlobe } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'

import { websiteItems } from '../data/WebsiteItems'

const StickyInfo = () => {
    const [dropMenu, setDropMenu] = useState<boolean>(false)

    const isOpen = () => {
        if(dropMenu) return 'rotate-0'
        return 'rotate-180'
    } 

    return (
        <div className='sticky bottom-0 h-10 flex items-center bg-footer gap-x-8 md:hidden lg:flex'>
            <div className='relative hidden lg:flex'>
                <div className='flex items-center gap-x-12 border-r-[1px] border-r-font p-2'>
                    <div className='flex items-center gap-x-4'>
                        <BsGlobe className='text-[21px] text-fade opacity-60' />
                        <p>Other Websites of HI's Network</p>
                    </div>
                    <MdExpandMore className={`text-[21px] transition-all opacity-60 ${isOpen()}`} onClick={() => setDropMenu((prev) => !prev)}/>
                </div>

                {
                    !dropMenu && 
                    <div className='absolute bottom-8 w-80 bg-footer border-[1px] border-[#14141515] rotate-180'>
                        <ul className='flex flex-col gap-y-2 rotate-180 py-2'>
                        {
                            websiteItems.map((item, index) => (
                                <li key={index} className='hover:bg-primary hover:text-white px-4'>{item}</li>
                            ))
                        }
                        </ul>
                    </div>
                }
            </div>

            <div className='gap-x-8 items-center hidden lg:flex'>
                <FaFacebookF className='text-[18px] text-fade opacity-60 hover:text-info hover:opacity-100' />
                <FaTwitter className='text-[18px] text-fade opacity-60 hover:text-info hover:opacity-100' />
                <FaLinkedin className='text-[18px] text-fade opacity-60 hover:text-info hover:opacity-100' />
            </div>

            <div className='flex lg:pl-8 items-center flex-1 lg:gap-x-1'>
                <div className='hidden lg:flex flex-1 h-full'>
                    <p className='text-font text-center py-2'>Call for Tenders</p>
                </div>
                <div className='hidden lg:flex flex-1 h-full'>
                    <p className='text-font text-center py-2'>Terms & Conditions</p>
                </div>
                <div className='flex-1 bg-info h-full'>
                    <p className='text-white text-center py-2'>Alert Us</p>
                </div>
                <div className='flex-1 bg-info h-full'>
                    <p className='text-white text-center py-2'>Join Us</p>
                </div>
                <div className='flex-1 bg-danger h-full'>
                    <p className='text-white text-center py-2'>Donate</p>
                </div>
            </div>
        </div>
    )
}

export default StickyInfo