import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import UnderProfileLinks from './UnderProfileLinks'

const Wrapper = styled.div`
  margin: 2em;
  min-width: 20%;
  height: 100vh;
`

class LeftSide extends React.Component {
  render() {
    return (
      <Wrapper>
        <Profile />
        <UnderProfileLinks />
      </Wrapper>
    )
  }
}

export default LeftSide
