import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em 2em;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`
const Icon = styled.img`
  height: 1.2em;
  width: 1.2em;
`
const PlusIcon = styled.img`
  padding-top: 0.2em;
  height: 1.2em;
  width: 1em;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const IconBox = styled.div`
  margin: 2px;
  padding: 2px 10px;
  border-radius: 5px;
  background: var(--blue);
  box-shadow: var(--btnShadow);
  transition: linear 0.2s;
  &:hover {
    background-color: var(--oxfordBlue);
    transition: linear 0.2s;
  }
`
const Text = styled.p`
  font-family: var(--Lato);
  transition: 0.3s;
  &:hover {
    color: var(--blue);
    transition: 0.3s;
  }
`

const BottomProfileLink: FC = () => (
  <Wrapper>
    <LeftIcons />
    <LinkText />
    <RightIcons />
  </Wrapper>
)
const LeftIcons: FC = () => (
  <Container>
    <Icon src={process.env.PUBLIC_URL + '/Icons/people.svg'} alt="your network" />
    <Icon src={process.env.PUBLIC_URL + '/Icons/pub_light.png'} alt="your publications" />
  </Container>
)
const RightIcons: FC = () => (
  <Container>
    <AddUserIcon />
    <AddPublicationIcon />
  </Container>
)

const AddUserIcon: FC = () => (
  <IconBox>
    <Icon src={process.env.PUBLIC_URL + '/Icons/user-plus.svg'} alt="add friend" />
  </IconBox>
)
const AddPublicationIcon: FC = () => (
  <IconBox>
    <PlusIcon src={process.env.PUBLIC_URL + '/Icons/plus.svg'} alt="add publication" />
  </IconBox>
)

const LinkText: FC = () => (
  <Container>
    <Text>Your Network</Text>
    <Text>Your Publications</Text>
  </Container>
)

export default BottomProfileLink
