import React from 'react'
import styled from 'styled-components'
export default function But() {
  return (
    <>
        <Container>
            <button id ="hii">ADD</button>
        </Container>
    </>
  )
}

const Container =styled.div`
display:flex;
#hii{
  border-radius:100px;
  width:25vw;
}
margin-top:15vh;
`