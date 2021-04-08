import React, { FC } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Icon = styled.img`
width: 1.5em;
height: 1.5em;
margin: 0 1em;
`

export const Item = styled.li`
display: flex;
justify-content: flex-start;
margin: 1em;
`

export const ItemText = styled(Link)`
font-family: var(--Lato);
cursor: pointer;
color: inherit;
`

interface IMenuLink {
    icon: string
    text: string
    route: string
  }

  const MenuLink: FC<IMenuLink> = (props) => {
    return (
      <Item>
        <Icon src={props.icon} />
        <ItemText to={props.route}>{props.text}</ItemText>
      </Item>)
  }

  export default MenuLink
  

  