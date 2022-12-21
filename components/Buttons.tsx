import React, { FC } from 'react'
import styled from 'styled-components'

import { BsArrowRight } from 'react-icons/bs'

interface BtnProps {
  text: string
  onClick?: any
  additionalclassName?: string
  additionalIconclassName?: string
  additionalTextclassName?: string
  icon?: JSX.Element 
}

const Btn = styled.button`
    width: max-content;
    background-color: transparent;
    padding: 0.75rem 1.5rem;
    border: 1px solid #eeeeee;
    position: relative;
    overflow: hidden;
    background-size: 400%;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition: 0.5s all ease;
        background-color: #eeeeee;
    }
    &:hover::before {
        transform: scaleX(1);
    }
    span {
        position: relative;
        z-index: 1;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 400;
        text-align: center;
        color: #eeeeee;
    }
    &:hover span {
      color: #d34607;
    }
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
        <span>
            {text}
        </span>
    </Btn>
  )
}

const FlatIconButton: FC<BtnProps> = ({ text, onClick, additionalclassName, additionalIconclassName, additionalTextclassName }) => {
  return (
    <FIButton className={`py-3 flex gap-x-2 items-center ${additionalclassName}`} onClick={onClick}>
      <BsArrowRight className={`text-[18px] text-primary ${additionalIconclassName}`} />
      <p className={`text-primary hover:text-info ${additionalTextclassName}`}>{text}</p>
    </FIButton>
  )
}

export { PrimaryButton, FlatIconButton }