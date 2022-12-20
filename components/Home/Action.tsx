import React from 'react'
import ActionInProgress from './Action/ActionInProgress'
import Header from './Action/Header'
import Latest from './Action/Latest'

const Action = () => {
  return (
    <div className='w-full lg:w-11/12 mx-auto pb-12 flex flex-col gap-y-4'>
        <Header />
        <ActionInProgress />
        <Latest />
    </div>
  )
}

export default Action