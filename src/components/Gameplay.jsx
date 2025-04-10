import React from 'react'
import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import styled from 'styled-components'
import Reset from './Reset'
import { TheDice } from './TheDice'
import { RollDice } from './RollDice'
import { Button } from '../styled/Button'
import { Rules } from './Rules'

export const Gameplay = () => {
    const [score,setscore]=useState(0);
    const [selectedNumber,setselectedNumber]=useState(1)
    const [currentDice,setcurrentDice]=useState(1);
    const [error,seterror]=useState("");
    const [showRules,setShowRules]=useState(false)
    const generateRandomNumber=(min,max)=>
        {
            console.log(Math.floor(Math.random()*(max-min)+min))
            return Math.floor(Math.random()*(max-min)+min);
    
        }
    
        const roll=()=>
        {
            if (!selectedNumber) 
            {
                seterror("You have not selected any number")
                return ;
            }
            const randomNumber=generateRandomNumber(1,7)
            setcurrentDice(randomNumber)

 
            if (selectedNumber===randomNumber)
            {
                setscore(score+6)
            }
            else
            {
                setscore(score-2)
            }

            setselectedNumber(undefined)
        }

        const resetScore=()=>{
            setscore(0)
        }



  return (
    <>
    <ABox>
        <TotalScore score= {score}/>
        <NumberSelecter seterror={seterror} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} error={error}/>
    </ABox>

    <RollDice currentDice={currentDice} roll={roll}/>
    <Dabba>
    <div className='btns'>
    <Button onClick={resetScore}>Reset</Button>
    <Button onClick={()=>setShowRules(!showRules)}>{showRules?"Hide":"Show"} Rules</Button>
    </div>
    </Dabba>
    {showRules && <Rules/>}
    </>
  )
}

export default Gameplay 

const ABox=styled.div`
    display: flex;
    justify-content: space-between;

    top: 64px;
    left: 80px;
    gap: 593px;

`
const Container = styled.div`
    display:flex;

    flex-direction: column;
    align-items: center;
`
const Dabba=styled.div`
    .btns{
        display: flex;
        flex-direction: column;

        align-items: center;
        gap:10px;
    }
`;