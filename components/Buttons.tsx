import React, { FC } from 'react'
import styled from 'styled-components'

import { BsArrowRight } from 'react-icons/bs'

interface BtnProps {
  text: string
  onClick?: any
  additionalclassName?: string
  icon?: JSX.Element 
}

const Btn = styled.button`

`
const BtnText = styled.p`

`
const FIButton = styled.button`
  color: #0077c8;
  svg {
    color: #0077c8;
  }
  transition: all 0.3s ease-in-out;
  
  &:hover {
    padding-left: 1rem;
    color: #06038d;
  }
`

const PrimaryButton: FC<BtnProps> = ({ text, onClick, additionalclassName }) => {
  return (
    <Btn onClick={onClick} className={`bg-primary ${additionalclassName}`}>
        <BtnText>
            {text}
        </BtnText>
    </Btn>
  )
}

const FlatIconButton: FC<BtnProps> = ({ text, onClick, additionalclassName }) => {
  return (
    <FIButton className={`py-3 flex gap-x-2 items-center ${additionalclassName}`} onClick={onClick}>
      <BsArrowRight className='text-[18px] text-primary' />
      <p className='text-primary hover:text-info'>{text}</p>
    </FIButton>
  )
}

export { PrimaryButton, FlatIconButton }