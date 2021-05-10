import React from 'react'
import styled from 'styled-components'
import Publications from './Publications/Publications'
import {
  Switch,
  Route
} from "react-router-dom";
import { Entities } from '../RightSide/Entities/Entities';
import { Workspaces } from './Workspaces/Workspaces';
import { Resume } from '../Resume/Resume';

const Wrapper = styled.div`
  margin: 3em 2em;
  width: 100%;
  height: 100vh;
  @media (max-width: 900px) {
    margin:0;
  }`


class RightSide extends React.Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path="/publications">
            <Publications />
            <Workspaces/>
            <Resume/>
          </Route>
          <Route path="/ecosystem">
            <Ecosystem />
          </Route>
          <Route path="/entities">
            <Entities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    )
  }
}

const Ecosystem = () => {return <h1>ECOSYSTEM</h1>}
const Home = () => {return <h1>HOME</h1>}


export default RightSide
