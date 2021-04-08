import React, { FC } from 'react'
import styled from 'styled-components'
import MenuLink from '../common/MenuLink'
import { Item } from '../common/MenuLink'
import { ItemText } from '../common/MenuLink'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Menu = styled.ul`
position:absolute;
left:0;
background-color: white;
margin-top: 8px;
width: 30%;
z-index: 2;
overflow-y: scroll;
overflow-x: hidden;
height: 70vh;
&::-webkit-scrollbar{
     width: 10px;
     cursor: pointer;
};
&::-webkit-scrollbar-track {
  background: #f1f1f1; 
};
&::-webkit-scrollbar-thumb {
  background: var(--blue);
  border-radius: calc(15px / 2);
  &:hover {
      background-color: black;
  }
};
`
const Title = styled.p`
color: gray;
font-size: 0.9em;
margin-left: 2em;
font-family: var(--Lato);
`
const Input = styled.input`
min-width: 90%;
border-radius: 5px;
padding: 0.3em;
border: none;
border: 1.5px solid var(--opacityGray);
&::placeholder {
color: var(--opacityGray);
}
`
const InputBox = styled.li`
text-align: center;
margin: 1em 0.5em;`

const Photo = styled.img`
width:3em;
margin: 0 1em;
`
const Wrapper = styled.div` 
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
`
const SeeProfileBtn = styled.button`
border: none;
background: transparent;
font-size: 0.8em;
font-weight: 600;
color: var(--blue);
cursor: pointer;
margin-top:0.2em;
`

const LogoutBox = styled.div`
display: flex;
justify-content: center;
color: grey;
font-weight: 600;
border-top: 2px solid var(--platinium);
padding:0.5em;`

const LogoutIcon = styled.img`
margin-right: 0.5em;
`

const DropdownMenu: FC = () => {
    return (
        <Router>
        <Menu>
            <MenuInput />
            <MenuTitle title="Platform" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/house2.svg'} text="Home" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/pub_dark.png'} text="Publications" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/people.svg'} text="People" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/entities2.svg'} text="Entities" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/administration.svg'} text="Administration" />
            <MenuTitle title="Workspaces" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/house2.svg'} text="Client contract" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/pub_dark.png'} text="Supplier contract" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/entities.svg'} text="Corporate" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/network.svg'} text="Group Norms" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/administration.svg'} text="Real estate contracts" />
            <MenuTitle title="Account" />
            <Account />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/privacy.svg'} text="Privacy" />
            <MenuLink route="" icon={process.env.PUBLIC_URL + '/Icons/settings.svg'} text="Settings" />
            <LogOutLink/>
        </Menu>
        </Router>
    )
}


const Account: FC = () => {
    return (
        <Item>
            <ProfileImage />
            <Wrapper>
                <h2>Ferdynand Kiepski</h2>
                <SeeProfileBtn>See profile</SeeProfileBtn>
            </Wrapper>
        </Item>)
}

const LogOutLink: FC = () => {
    return (
        <LogoutBox>
            <LogoutIcon src={process.env.PUBLIC_URL + '/Icons/logout.svg'} />
            <ItemText to="">Log out</ItemText>
        </LogoutBox>)
}


const ProfileImage: FC = () => {
    return <Photo src="https://www.linkpicture.com/q/photo_10.png" alt="profile" />
}
const MenuInput: FC = () => {
    return (<InputBox><Input type="text" placeholder="Filter..." /></InputBox>)
}

interface IMenuTitle {
    title: string
}
const MenuTitle: FC<IMenuTitle> = (props) => {
    return (
        <li>
            <Title>{props.title}</Title>
        </li>)
}

export default DropdownMenu