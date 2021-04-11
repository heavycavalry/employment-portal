import React from 'react'
import TopBar from '../TopBar/TopBar'
import LeftSide from '../LeftSide/LeftSide'
import styled from 'styled-components'
import RightSide from '../RightSide/RightSide'
import {
  BrowserRouter as Router,
} from "react-router-dom";
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
      <Router>
        <TopBar />
        <MainContainer>

          <LeftSide />
          <RightSide />

        </MainContainer>
        </Router>
    )
  }
}
