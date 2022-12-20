/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FlatIconButton } from '../../Buttons'

const LatestCard = ({ categories, image, title }: any) => (
    <div className='flex flex-col gap-y-4'>
        <img src={image} alt='Latest Stories' className='flex-1 aspect-video' />
        <div className='flex gap-x-4'>
            {
                categories.map((category: any, index: number) => (
                    <p key={index} className='text-primary text-xs uppercase'>{category}</p>
                ))
            }
        </div>
        <h2 className='text-primary font-light'>{title}</h2>
        <FlatIconButton text='read_more_type' />
    </div>
)

const Latest = () => {
  return (
    <div className='flex flex-col gap-y-8 px-4 mt-4'>
        <h1 className='text-primary text-[36px] lg:text-[45px] font-normal'>Latest Stories</h1>
        <div className='w-full flex flex-col md:flex-row gap-x-8'>
            <LatestCard
                categories={['Insertion', 'Laws']}
                image='https://www.hi.org/sn_uploads/federation/news/Kabita_-Nepal--1-.jpg?size=640x310&crop'
                title='HI supports Kabita in her dream job'
            />
            <LatestCard
                categories={['Insertion']}
                image='https://www.hi.org/sn_uploads/federation/news/photo-sundari.png?size=640x310&crop'
                title='Sundari, 11yrs: "I want to be a doctor"'
            />
                <LatestCard
                    categories={['Insertion', 'Rehabilitation']}
                    image='https://www.hi.org/sn_uploads/federation/news/NEPAL_Sandip_Rehabilitation_IMG_6208_opt.jpg?size=640x310&crop'
                    title='Nepal: Sandip’s story of determination'
                />
        </div>
    </div>
  )
}

export default Latest