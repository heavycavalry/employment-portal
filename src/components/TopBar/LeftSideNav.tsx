import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import {
  Link
} from "react-router-dom";

export const Wrapper = styled.div`
  width: 33vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2em;
`
const Logo = styled.img`
  width: 50px;
  margin: 2em;
`
const HouseIcon = styled.img`
  width: 25px;
`

class LeftSideNav extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/"><Logo src={process.env.PUBLIC_URL + '/Icons/logo.png'} /></Link>
        <Link to="/"><HouseIcon src={process.env.PUBLIC_URL + '/Icons/house.svg'} /></Link>
        <Dropdown/>
      </Wrapper>
    )
  }
}
export default LeftSideNav
