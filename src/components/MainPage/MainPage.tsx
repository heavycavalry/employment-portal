import React, {FC, useEffect} from 'react'
import TopBar from '../TopBar/TopBar'
import LeftSide from '../LeftSide/LeftSide'
import styled from 'styled-components'
import RightSide from '../RightSide/RightSide'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getUsers, getPhoto } from '../../actions/usersActions'
require('../../styles/Global.css')

type GetUsers = ReturnType<typeof getUsers>

type GetPhoto= ReturnType<typeof getPhoto>

const MainContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media (max-width: 900px) {
    flex-wrap:wrap;
    justify-content:center;
  }`

export const MainPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhoto>(getPhoto());
  }, []);

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

