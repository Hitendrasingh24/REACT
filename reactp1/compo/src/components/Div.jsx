import React from 'react'
import Header from './Header'
import Todoitem from './Todoitem'
import styled from 'styled-components';
import But from './But';
export default function () {
  return (
    <div>
        <Container>
        <Header/>
        <Todoitem/>
        <Todoitem/>
        <But/>
        </Container>
    </div>
  )
}

const Container =styled.div`
width:40vw;
height:40vh;
display:flex;
flex-direction:column;
align-items: center;
background-color:white;
`
