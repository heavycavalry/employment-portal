import React from 'react'
import styled from 'styled-components'
import LatestPublications from './LatestPublications'
import MainPublication from './MainPublication'

const Wrapper = styled.div`
  display: flex;
  height: 450px;
  background-color: white;
  border-radius: 5px;
  position:relative;`

const Button = styled.button`
position: absolute;
bottom:0;
right: 50px;
padding: 5px;
background: none;
color: var(--blue);
;`
  
class Publications extends React.Component {
  render() {
    return (
      <Wrapper>
        <MainPublication/>
        <LatestPublications />
        <Button>See more publications</Button>
      </Wrapper>
    )
  }
}


export default Publications
