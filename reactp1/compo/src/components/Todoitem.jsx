import React from 'react'
import styled from 'styled-components'
export default function Todoitem(props) {
  return (
    <Container>
        {/* {props.completed && <input  type = 'radio'/>} Conditional rendering */}
        {props.completed ? <></> : <input  type = 'radio'/>}

        <span>{props.name}</span>
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