import React from 'react'
import styled from 'styled-components'
import Publications from './Publications/Publications'

const Wrapper = styled.div`
  margin: 2em;
  width: 80%;
  height: 100vh;
`

class RightSide extends React.Component {
  render() {
    return (
      <Wrapper>
        <Publications />
      </Wrapper>
    )
  }
}

export default RightSide
