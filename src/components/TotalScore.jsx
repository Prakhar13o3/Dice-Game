import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
  )
}

export default TotalScore 

const ScoreContainer=styled.div`

    text-align: center;
    max-width:200px;
    margin-left:40px;
    
    h1{
        size: 100px;
        font-family: Poppins;
font-weight: 500;
font-size: 100px;
line-height: 100%;
letter-spacing: 0%;

    }
    p{
        font-size: 24px;
        font-weight: 500px;

    }

`;
