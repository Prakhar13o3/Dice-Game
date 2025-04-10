import React from 'react'
import styled from 'styled-components'
export const Reset = () => {
  return (
    <Container>
        <button>Reset Score</button>
        <br></br>
        <button>Show Result</button>
    </Container>
  )
}
export default Reset
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
