import React from 'react'
import styled from 'styled-components'

export const TheDice = () => {
  return (
    <Comp>
        <img src="../public/TheDice.jpg"/>
        <p>Click on Dice to roll</p>
    </Comp>
  )
}

const Comp=styled.div`
  p{
    text-align: center;
  }
`
