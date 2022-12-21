import React from 'react'
import ActionInProgress from './Action/ActionInProgress'
import Divider from './Action/Divider'
import Funders from './Action/Funders'
import Header from './Action/Header'
import Latest from './Action/Latest'
import Situation from './Action/Situation'

const Action = () => {
  return (
    <div className='w-full lg:w-11/12 mx-auto pb-12 flex flex-col gap-y-4'>
        <Header />
        <ActionInProgress />
        <Latest />
        <Divider />
        <Situation />
        <Funders />
    </div>
  )
}

export default Action