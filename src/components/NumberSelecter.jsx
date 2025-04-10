import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelecter = ({seterror,error,selectedNumber,setselectedNumber}) => {
    const arr=[1,2,3,4,5,6]

    console.log(selectedNumber)
  return (
    <Container>
      <p className='error'>{error}</p>
      <BoxContainer>

        {arr.map((i) => (
                    <Box 
                        key={`number-${i}`}  // Unique key for each Box
                        $isSelected={i === selectedNumber}
                        onClick={() => {setselectedNumber(i);seterror("")}}
                    >
                        {i}
                    </Box>
                ))}
        </BoxContainer>
        <p>Select A Number</p>
        
    </Container>

  )
}

export default NumberSelecter

const Box=styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    place-items: center;
    display:grid;
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    background-color: ${ (props) => props.$isSelected ? "black" : "white"};
    color: ${ (props) => props.$isSelected ? "white" : "black"};
    &:hover{
    cursor: pointer;
    }
    `;

const Container=styled.div` 
  .error{
    color:red;
  }
  margin-top: 64px;
  margin-right: 30px;

  p{
    text-align: center;
  }
       `;


const BoxContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
`;