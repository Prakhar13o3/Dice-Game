import React from 'react'
import styled from 'styled-components';
export const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play</h2>
        <p>Select Any Number</p>
        <p>after clicking on dice if you get the same number on dice as your selected number you get 6 points and if not 2 points deducted</p>
        </RulesContainer>

  )
}

const RulesContainer=styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin:0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;

    }
`;