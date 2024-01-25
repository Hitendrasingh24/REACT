import React from 'react'
import styled from 'styled-components'
export default function Todoitem() {
  return (
    <Container>
        <input  type = 'radio'/>
        <span>eat</span>
        <span>...</span>
    </Container>
  )
}

const Container = styled.div`
justify-content: space-evenly;
    display: inline-flex;
    width: inherit;
    margin-top:10px;

`