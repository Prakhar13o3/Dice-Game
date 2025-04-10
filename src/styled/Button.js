import styled from "styled-components";

export const Button = styled.button`
min-width:220px;
border:none;
color:white;
background: black;
border-radius: 5px;
padding-top: 10px;
padding-right: 18px;
padding-bottom: 10px;
padding-left: 18px;
font-size: 16px;
border:1px solid transparent;
transition: 0.3s background ease-in;
&:hover{
    background-color: white;
    border:1px solid black;
    color:black;
    transition: 0.3s background ease-in;
    cursor: pointer;
}

`;