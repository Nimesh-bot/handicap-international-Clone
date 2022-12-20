import React from 'react'
import Action from '../components/Home/Action'
import Landing from '../components/Home/Landing'

const Home = () => {
  return (
    <main className='w-full bg-body dark:bg-font flex flex-col'>
      <Landing />
      <Action />
    </main>
  )
}

export default Home