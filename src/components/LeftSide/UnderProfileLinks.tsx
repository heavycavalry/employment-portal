import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.2em;
  align-items: center;
  cursor: pointer;
  a {
    font-family: var(--Lato);
  color: var(--oxfordBlue);
  padding-left: 0.5em;
  border-left: 2px solid var(--blue);
  transition-property: border;
  transition-duration: 0.2s;
  transition-timing-function: linear;
&:hover{
  color: var(--blue);
  border-left: 5px solid var(--blue);
  }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Icon = styled.img`
  width: 1.5em;
  margin: 0.2em 2em 0.2em 4em;
`

class UnderProfileLinks extends React.Component {
  render() {
    return (
      <Wrapper>
        <Publications/>
        <Ecosystem />
        <Entities />
      </Wrapper>
    )
  }
}

class Publications extends React.Component {
  render() {
    return (
      <Container>
        <Icon src={process.env.PUBLIC_URL + '/Icons/pub_dark.png'}/>
        <Link to="/publication">Publications</Link>
      </Container>
    )
  }
}
class Ecosystem extends React.Component {
  render() {
    return (
      <Container>
        <Icon src={process.env.PUBLIC_URL + '/Icons/ecosystem.svg'}/>
        <Link to="/ecosystem">Ecosystem</Link>
      </Container>
    )
  }
}

class Entities extends React.Component {
  render() {
    return (
      <Container>
        <Icon src={process.env.PUBLIC_URL + '/Icons/entities.svg'}/>
        <Link to="/entities">Entities</Link>
      </Container>
    )
  }
}

export default UnderProfileLinks
