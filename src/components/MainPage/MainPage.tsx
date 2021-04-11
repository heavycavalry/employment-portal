import React from 'react'
import TopBar from '../TopBar/TopBar'
import LeftSide from '../LeftSide/LeftSide'
import styled from 'styled-components'
import RightSide from '../RightSide/RightSide'
require('../../styles/Global.css')

const MainContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media (max-width: 900px) {
    flex-wrap:wrap;
    justify-content:center;
  }`

export class MainPage extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <MainContainer>
          <LeftSide />
          <RightSide />
        </MainContainer>
      </>
    )
  }
}
