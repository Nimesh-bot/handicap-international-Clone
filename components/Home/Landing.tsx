/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Header from './Landing/Header'

const Landing = () => {
  return (
    <div className='w-full flex flex-col gap-y-12'>
        <Header />
        <img 
            src='https://www.hi.org/sn_uploads/Learning_Facilitator_Ms__Sarita_Rana_supporting_Abishek_Pun_Magar_to_learn_through_sign_language_app.jpg?maxw=0&maxh=0' alt='Humanity & Inclusion Nepal Projects'
            className='w-full aspect-video'
        />
    </div>
  )
}

export default Landing