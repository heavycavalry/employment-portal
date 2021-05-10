import React, { FC } from 'react'
import styled from 'styled-components'
import { IRandomNumber } from '../../App'
import Profile from './Profile'
import UnderProfileLinks from './UnderProfileLinks'

const Wrapper = styled.div`
  margin: 3em;
  min-width: 20%;
  @media (max-width: 900px) {
    
  }`

export const LeftSide: FC<IRandomNumber> = ({id}) => {
    return (
      <Wrapper className="left-side">
        <Profile id = {id}/>
        <UnderProfileLinks />
      </Wrapper>
    )
}

export default LeftSide
