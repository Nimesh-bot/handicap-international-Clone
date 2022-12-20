import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 3rem);
`
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    li {
        cursor: pointer;
    }
`

const ResNav = () => {
    const [selected, setSelected] = useState<string>('EN');
    const isSelected = (item: string) => {
        if(item === selected) return 'bg-primary text-white'
    }
    const [itemShow, setItemShow] = useState({
        aboutUs: false,
        ourActions: false,
        workWithUs: false,
        resources: false
    })

    return (
        <Container className='flex flex-col items-center justify-center'>
            <ul className='flex flex-col items-center justify-center gap-y-8 cursor-'>
                <li className='text-lg uppercase cursor-pointer' onClick={() => setItemShow({
                    aboutUs: !itemShow.aboutUs,
                    ourActions: false,
                    workWithUs: false,
                    resources: false
                })}>About Us</li>
                <div className={itemShow.aboutUs ? 'block' : 'hidden'}>
                    <List>
                        <li>Our Cause</li>
                        <li>Our Organization</li>
                        <li>HI Institue</li>
                        <li>Our Partner</li>
                    </List>
                </div>
                <li className='text-lg uppercase cursor-pointer' onClick={() => setItemShow({
                    aboutUs: false,
                    ourActions: !itemShow.ourActions,
                    workWithUs: false,
                    resources: false
                })}>Our Actions</li>
                <div className={itemShow.ourActions ? 'block' : 'hidden'}>
                    <List>
                        <li>Where we work</li>
                        <li>Innovation</li>
                        <li>Rehabilitation</li>
                        <li>Health</li>
                        <li>Inclusive Education</li>
                        <li>Livelihoods</li>
                        <li>Protection</li>
                        <li>Armed Violence Reduction</li>
                        <li>Emergency Response</li>
                        <li>From Emergency to Development</li>
                    </List>
                </div>
                <li className='text-lg uppercase cursor-pointer' onClick={() => setItemShow({
                    aboutUs: false,
                    ourActions: false,
                    workWithUs: !itemShow.workWithUs,
                    resources: false
                })}>Work With Us</li>
                <div className={itemShow.workWithUs ? 'block' : 'hidden'}>
                    <List>
                        <li>Benefit from our experience</li>
                        <li>Become partners</li>
                        <li>Support our campaigns</li>
                        <li>Donate</li>
                        <li>Join the team</li>
                        <li>Supplies</li>
                    </List>
                </div>
                <li className='text-lg uppercase cursor-pointer' onClick={() => setItemShow({
                    aboutUs: false,
                    ourActions: false,
                    workWithUs: false,
                    resources: !itemShow.resources
                })}>Resources</li>
                <div className={itemShow.resources ? 'block' : 'hidden'}>
                    <List>
                        <li>News</li>
                        <li>Publications</li>
                        <li>Institutional Policies</li>
                        <li>Financial transparency</li>
                        <li>Other Resources</li>
                    </List>
                </div>
                <li>
                    <div className='flex gap-x-2 pl-4'>
                        <p className={`p-2 cursor-pointer ${isSelected('FR')}`} onClick={() => setSelected('FR')}>FR</p>
                        <p className={`p-2 cursor-pointer ${isSelected('EN')}`} onClick={() => setSelected('EN')}>EN</p>
                    </div>
                </li>
            </ul>
        </Container>
    )
}

export default ResNav