import styled from 'styled-components';

export const Button = styled.button`
background-color: #2B6C7E;
color: white;
width: 300px;
height: 45px;
margin: 10px;
border-radius: 10px
`
export const ButEdit = styled.button`
color: white;
background-color: #2B6C7E;
border-color: #2B6C7E;

width: 40px;
height: 40px;
`
export const ButDelete = styled.button`
color: white;
background-color: #FE4568;
border-color: #FE4568;

align-items: center;
width: 40px;
height: 40px;
`

export const ButAdd = styled.button`
color: white;
background-color: #2B6C7E;

font-family: Poppins;
`

export const ButCancel = styled.button`
color: white;
background-color: #FE4568;

font-family: Poppins;
`
export default (Button, ButEdit, ButDelete, ButAdd);
