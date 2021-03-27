import React, { FC } from 'react'
import styled from 'styled-components'


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

export const ItemText = styled.p`
font-family: var(--Lato);
`

interface IMenuLink {
    icon: string
    text: string
  }

  const MenuLink: FC<IMenuLink> = (props) => {
    return (
      <Item>
        <Icon src={props.icon} />
        <ItemText>{props.text}</ItemText>
      </Item>)
  }

  export default MenuLink
  

  