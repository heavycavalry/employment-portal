import React, { FC } from 'react'
import styled from 'styled-components'
import LatestPublications from './LatestPublications'
import MainPublication from './MainPublication'

const Wrapper = styled.div`
  display: flex;
  height: 450px;
  background-color: white;
  border-radius: 5px;`
  
class Publications extends React.Component {
  render() {
    return (
      <Wrapper>
        <MainPublication/>
        <LatestPublications />
      </Wrapper>
    )
  }
}

export default Publications
