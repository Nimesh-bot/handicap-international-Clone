/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import StickyInfo from './StickyInfo'

interface LayoutProps {
  children: React.ReactNode
}

const Main = styled.main`
  min-height: calc(100vh - 5.4rem);
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='light'>
      <Head>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
          />

          <link rel="icon" href="/favicon.ico" />
          <link rel='manifest' href='/manifest.json' /> 

          <title>Nepal | HI</title>
          <meta name="description" content="In Nepal, HI aims to enhance access to education for all children, including children with disabilities, and to enable people with injuries or disabilities to benefit from rehabilitation sessions and inclusion services." />
          <meta name="generator" content="Humanity &amp; Inclusion" />
          <meta name="robots" content="index, follow" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className='relative w-full min-h-screen bg-body dark:bg-font'>
        <Navbar />
        <Main className='pt-12 max-w-[1920px] mx-auto flex px-4 xl:px-0'>
          {children}
        </Main>
        <StickyInfo />
      </div>
    </div>
  )
}

export default Layout