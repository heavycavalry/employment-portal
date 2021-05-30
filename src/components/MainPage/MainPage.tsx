import { FC, useEffect, useState } from "react";
import TopBar from "../TopBar/TopBar";
import LeftSide from "../LeftSide/LeftSide";
import styled from "styled-components";
import RightSide from "../RightSide/RightSide";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getUsers,
  getPhoto,
  getPost,
  getComment,
} from "../../actions/usersActions";
import { IRandomNumber } from "../../App";
require("../../styles/Global.css");
/* eslint-disable */

type GetUsers = ReturnType<typeof getUsers>;

type GetPhoto = ReturnType<typeof getPhoto>;

type GetPost = ReturnType<typeof getPost>;

type GetComment = ReturnType<typeof getComment>;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MainPage: FC<IRandomNumber> = ({id}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhoto>(getPhoto());
    dispatch<GetPost>(getPost());
    dispatch<GetComment>(getComment());
  }, []);

  return (
    <Router>
      <TopBar id={id}/>
      <MainContainer>
        <LeftSide id={id}/>
        <RightSide id={id}/>
      </MainContainer>
    </Router>
  );
};
