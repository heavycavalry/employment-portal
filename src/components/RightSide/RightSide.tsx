import React, {FC} from 'react'
import styled from 'styled-components'
import Publications from './Publications/Publications'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MainPage } from '../MainPage/MainPage';

const Wrapper = styled.div`
  margin: 3em;
  width: 80%;
  @media (max-width: 900px) {
    margin:0;
  }`


class RightSide extends React.Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path="/publication">
            <Publications/>
          </Route>
          <Route path="/network">
            <Network/>
          </Route>
          <Route path="/entities">
            <Entities/>
          </Route>
          <Route path="/ecosystem">
            <Ecosystem/>
          </Route>
          <Route path="/">
            <MainPage/>
          </Route>
        </Switch>
      </Wrapper>
    )
  }
}

const Network: FC = () => {return (<></>)} 
const Ecosystem: FC = () => {return (<></>)} 
const Entities: FC = () => {return (<></>)} 

export default RightSide
