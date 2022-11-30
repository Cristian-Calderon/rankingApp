import React from "react";
import styled from "styled-components"; 

export default function ButtonCreate(){
   return <Button>
      Create 
   </Button>
}

const Button = styled.div`
    color: rgb(255, 255, 255);
    background-color: #FE651A;
    border-radius: 5px;
    border: none;
    position: relative;
    width: 100px;
    height: 35px;
    margin-top: 15%;
    font-family: Poppins;
    font-size: 10px;
`
