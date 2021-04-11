import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.2em;
  align-items: center;
  cursor: pointer;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Icon = styled.img`
  width: 1.5em;
  margin: 0.2em 2em 0.2em 4em;
`
const Text = styled.p`
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
}`

class UnderProfileLinks extends React.Component {
  render() {
    return (
      <Wrapper>
        <Publications />
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
        <Text>Publications</Text>
      </Container>
    )
  }
}
class Ecosystem extends React.Component {
  render() {
    return (
      <Container>
        <Icon src={process.env.PUBLIC_URL + '/Icons/ecosystem.svg'}/>
        <Text>Ecosystem</Text>
      </Container>
    )
  }
}

class Entities extends React.Component {
  render() {
    return (
      <Container>
        <Icon src={process.env.PUBLIC_URL + '/Icons/entities.svg'}/>
        <Text>Entities</Text>
      </Container>
    )
  }
}

export default UnderProfileLinks
