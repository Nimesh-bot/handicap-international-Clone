/* eslint-disable @next/next/no-img-element */
import React from 'react'

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
    </div>
)

const Latest = () => {
  return (
    <div className='flex flex-col gap-y-8 px-4 mt-4'>
        <h1 className='text-primary text-[45px]'>Latest Stories</h1>
        <div className='w-full flex gap-x-8'>
            <LatestCard
                categories={['Insertion', 'Laws']}
                image='https://www.hi.org/sn_uploads/federation/news/Kabita_-Nepal--1-.jpg?size=640x310&crop'
                title='HI supports Kabita in her dream job'
            />
        </div>
    </div>
  )
}

export default Latest