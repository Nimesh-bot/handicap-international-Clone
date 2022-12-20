/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

import { TbHeartbeat } from 'react-icons/tb'

const HTMLContainer = styled.div`
    p {
        color: #000;
    }
`

const actionData = {
    data: "<p>HI has been present in Nepal since 2000. The country, adjoining the Himalayan mountain range, experiences significant seismic activity, particularly in the Kathmandu Valley where 1.5 million people live.</p>" + 
    "<p>HI is working with communities and local authorities, notably by developing emergency plans, and improving emergency warning and evacuation systems. This work takes into account the specific needs of people with disabilities.</p>"
    + "<p>HI trains teachers and promotes access to education for children with special education needs, such as autism, particularly children with disabilities in several districts, through the “Reading for All” project. HI also provides support to young girls and teenage girls with disabilities from the most disadvantaged communities by promoting their access to education. In addition, the organisation supports five rehabilitation centres in Nepal, enabling thousands of people in the country to benefit from physiotherapy and orthopaedic fitting, and works to improve rehabilitation services in earthquake-affected districts.</p>"
    + "<p>Thanks to its experience in the case management of earthquake victims, the organisation was able to take immediate action to help people affected by the earthquake that hit Nepal on 25th April 2015, which killed more than 8,000 people and injured more than 22,000.</p>"
    + "<p>Through its Physical Rehabilitation Activity program, HI supports the establishment of a sustainable, integrated, public-private rehabilitation system in order to improve the mobility and functional independence of victims of conflict and women, men, girls and boys in need of rehabilitation</p>"
}

const ActionInProgress = () => {
  return (
    <div className='flex flex-col gap-y-8 px-4'>
        <h1 className='text-primary text-[45px]'>Actions in process</h1>
        <HTMLContainer className='flex flex-col gap-y-2' dangerouslySetInnerHTML={{ __html: actionData.data }}/>
        <div className='bg-info p-12 flex flex-col items-center justify-center gap-y-16'>
            <h1 className='text-white font-normal'>Areas of Intervention</h1>
            <div className='flex gap-x-12 justify-center items-center'>
                <div className='flex flex-col gap-y-2 text-white items-center'>
                    <img src='/icons/heart.png' className='w-12 h-auto' alt='Health'/>
                    <p className='text-white uppercase'>Health</p>
                </div>
                <div className='flex flex-col gap-y-2 text-white items-center'>
                    <img src='/icons/inclusion.png' className='w-12 h-auto' alt='Health'/>
                    <p className='text-white uppercase'>Insertion</p>
                </div>
                <div className='flex flex-col gap-y-2 text-white items-center'>
                    <img src='/icons/laws.png' className='w-12 h-auto' alt='Health'/>
                    <p className='text-white uppercase'>Laws</p>
                </div>
                <div className='flex flex-col gap-y-2 text-white items-center'>
                    <img src='/icons/heart.png' className='w-12 h-auto' alt='Health'/>
                    <p className='text-white uppercase'>Prevention</p>
                </div>
                <div className='flex flex-col gap-y-2 text-white items-center'>
                    <img src='/icons/injection.png' className='w-12 h-auto' alt='Health'/>
                    <p className='text-white uppercase'>Rehabilitation</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActionInProgress