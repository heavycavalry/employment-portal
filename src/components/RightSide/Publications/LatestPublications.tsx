import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  margin: 1em;
  width: 60%;
  overflow-y: scroll;
`

const LatestPublications = () => (
  <TextContainer>
    <Publication />
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
        <PublicationTopInfo />
        <PublicationBottomInfo />
      </div>
    )
  }
}

const PublicationTopInfo = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudanti. Lorem ipsum dolor sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudanti. Lorem ipsum dolor sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudanti. Lorem ipsum dolor sit.
    </p>
  )
}

const PublicationBottomInfo = () => {
  return (<div><p>12:11</p></div>)
}

export default LatestPublications
