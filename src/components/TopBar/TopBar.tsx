import React, { FC } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import RightSideNav from './RightSideNav'
import LeftSideNav from './LeftSideNav'

export const Wrapper = styled.div`
  min-width: 100%;
  background: #0d1b2a;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Navigation: FC = () => {
  return (
    <Wrapper>
      <LeftSideNav />
      <SearchBar />
      <RightSideNav />
    </Wrapper>
  )
}

export default Navigation
