import React, { FC } from 'react'
import styled from 'styled-components'
import styles from '../../styles/Navigation.module.css'

export const Wrapper = styled.div`
  margin-right: 1em;
  width: 33vw;
  display: flex;
  justify-content: flex-end;
`
const IconBox = styled.div`
  background-color: var(--shadowBlue);
  margin: 10px;
  border-radius: 50%;
  transition: 0.5s;
  &:hover {
    background-color: var(--blue);
    transition: 0.5s;
  }
  &::before {
    content: '12';
    color: white;
    font-weight: bold;
    font-size: 0.9em;
    line-height: normal;
    position: absolute;
    background-color: red;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 20px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
`
interface IButton {
  source: string
  description: string
}

const RightSideNav: FC = () => (
  <Wrapper>
    <Button source={process.env.PUBLIC_URL + '/Icons/house.svg'} description="home page"/>
    <Button source={process.env.PUBLIC_URL + '/Icons/messages.svg'} description="messages"/>
    <Button source={process.env.PUBLIC_URL + '/Icons/bell.svg'} description="notifications"/>
  </Wrapper>
)

const Button: FC<IButton> = (props) => {
  return (
    <IconBox className="iconBox">
      <img className={styles.icon} src={props.source} alt={props.description} />
    </IconBox>
  )
}

export default RightSideNav
