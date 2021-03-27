import React, { FC } from 'react'
import styled from 'styled-components'
import styles from '../../styles/Navigation.module.css'
import Dropdown from './Dropdown'

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`
const Logo = styled.img`
  width: 4em;
`
const HouseIcon = styled.img`
  width: 2em;
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
