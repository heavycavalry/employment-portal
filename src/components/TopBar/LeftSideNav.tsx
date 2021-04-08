import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'

export const Wrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2em;
`
const Logo = styled.img`
  width: 50px;
  margin: 0 2em;
`
const HouseIcon = styled.img`
  width: 25px;
`

class LeftSideNav extends React.Component {
  render() {
    return (
      <Wrapper>
        <Logo src={process.env.PUBLIC_URL + '/Icons/logo.png'} />
        <HouseIcon src={process.env.PUBLIC_URL + '/Icons/house.svg'} />
        <Dropdown/>
      </Wrapper>
    )
  }
}
export default LeftSideNav
