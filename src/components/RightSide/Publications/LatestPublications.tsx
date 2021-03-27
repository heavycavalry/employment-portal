import React from 'react'
import styled from 'styled-components'
import img from "../../../Icons/publications.svg"

const TextContainer = styled.div`
  width: 60%;
  overflow-y: scroll;
`

const LatestPublications = () => (
  <TextContainer>
    <Publication/>
  </TextContainer>
)

class Publication extends React.Component {
  state = {
    date: '12 Jan 2020',
    name: 'Ferdynand',
    surname: 'Kiepski',
  }
  render() {
  return (
    <div>
      <PublicationTopInfo/> 
      <PublicationBottomInfo/>
    </div>
  )
}
}

const PublicationTopInfo = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      eveniet sunt, voluptatem dolorem quibusdam eos!
    </p>
  )
}

const PublicationBottomInfo = () => {
  return (<div><p>01:01:01</p>
  <p>Ferdek</p></div>)
}

export default LatestPublications
