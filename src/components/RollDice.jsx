import React, { useState } from 'react'
import styled from 'styled-components'
export const RollDice = ({roll,currentDice}) => {


    
  return (
    <DiceContainer>
        <div className='dice' onClick ={roll}>
            <img src={`Dices/dice_${currentDice}.png`}/>
        </div>
        <p>Click On Dice to Roll </p>
    </DiceContainer>
    
  )
}
const DiceContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 28px;
    p{
        font-size: 24px;
    }
    .dice{
    cursor:pointer;
}

`;

