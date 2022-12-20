/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Sling as Hamburger } from 'hamburger-react'

import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

import { INavItems } from '../@types/navitems'
import { navItems } from '../data/NavItems'
import ResNav from './ResNav'

const DropDown = styled.div`
    display: none;
    transition: all 0.3s ease-in-out;
    top: 0;
    right: -1rem;

    &:hover {
        display: block;
        top: 2.5rem;
        right: 0;
    }
`
const Title = styled.p`
    &:hover + ${DropDown} {
        display: block;
        top: 2.5rem;
        right: 0;
    }
    
`


const NavItems = ({ title, items }: INavItems) => (
    <li className='relative hidden lg:flex'>
        <Title className='z-10 hover:bg-primary hover:text-white cursor-pointer uppercase text-sm px-2 py-2'>{title}</Title>
        <DropDown className='w-60 absolute right-0 bg-white py-2 -z-10'>
            <ul className='flex-col flex'>
                {
                    items.map((item, index) => (    
                        <li key={index} className='hover:bg-primary px-4 py-2 hover:text-white'>{item}</li>
                    ))
                }
            </ul>
        </DropDown>
    </li>
)


const SearchBar = ({ clickEvent }: any) => (
    <div className='sticky top-0 right-0 w-full p-4 bg-body dark:bg-font flex justify-center items-center'>
        <input 
            type='text'
            placeholder='Search here'
            className='flex-1 bg-transparent border-none outline-none px-4 py-2'
        />
        <AiOutlineClose className='p-2 text-font hover:bg-primary hover:text-white text-[36px]' onClick={clickEvent}/>
    </div>
)

const Navbar = () => {
    const [selected, setSelected] = useState<string>('EN');
    const [search, setSearch] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const isSelected = (item: string) => {
        if(item === selected) return 'bg-primary text-white'
    }

    if (search) return <SearchBar clickEvent={() => setSearch(false)} />

    return (
        <div className='sticky top-0 w-full z-50'>
            <div className='h-12 flex justify-between items-center p-4 bg-body'>
                <img src='/logo/logo.png' className='h-10 w-auto' alt='Handicap International Logo'/>

                <ul className='flex gap-x-8 items-center relative'>
                    {
                        navItems.map((item, index) => (
                            <NavItems key={index} title={item.title} items={item.items} />
                        ))
                    }
                    <li className='lg:hidden'>
                        <Hamburger toggled={isOpen} toggle={() => setIsOpen((prev) => !prev)} size={21} />
                    </li>
                    <li className='hidden lg:flex'>
                        <div className='flex gap-x-2 pl-4 border-l-[1px] border-font'>
                            <p className={`p-2 cursor-pointer ${isSelected('FR')}`} onClick={() => setSelected('FR')}>FR</p>
                            <p className={`p-2 cursor-pointer ${isSelected('EN')}`} onClick={() => setSelected('EN')}>EN</p>
                        </div>
                    </li>

                    <AiOutlineSearch className='text-[21px] text-fade' onClick={() => setSearch(true)}/>
                </ul>
            </div>
            {
                isOpen && <ResNav />
            }
        </div>
    )
}

export default Navbar