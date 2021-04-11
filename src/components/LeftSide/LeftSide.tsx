import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import UnderProfileLinks from './UnderProfileLinks'

const Wrapper = styled.div`
  margin: 3em;
  min-width: 20%;
  @media (max-width: 900px) {
    
  }`

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
