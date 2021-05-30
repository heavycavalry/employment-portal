import React, { FC, useState } from "react";
import { Title } from "../../../styledComponents/Workspaces_styled";
import { IRandomNumber } from "../../../App";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import ReactPaginate from "react-paginate";
import { SpaceBetweenDiv } from "../Entities/TopEntities";
import {
  Container,
  FollowedDropdown,
  Input,
  SearchIcon,
} from "../../../styledComponents/FilterFollowedBtns";
import { InfoBox, TileBox, TileText, TileTitle } from "./Resume_styles";


interface IComentsTopTitle {
  title: string
}

export const Resume: FC<IRandomNumber & IComentsTopTitle> = ({ id, title }: any) => {
  const { commentsList } = useSelector<IState, IUsersReducer>(
    (globalState) => ({
      ...globalState.users,
    })
  );
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));

  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);
  const commentsPerPage = 6;
  const pagesVisited = pageNumber * commentsPerPage;

  const displayComments = commentsList
    .slice(pagesVisited, pagesVisited + commentsPerPage)
    .map((comment) => {
      return (
        <>
          {comment.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
            <TileBox>
              <TileTitle>{comment.name}</TileTitle>
              <TileText>{comment.body}</TileText>
              <InfoBox>
                <p>{usersList[id]?.name} </p>
                <p>Communication </p>
                <p>Updated 3 days ago by {usersList[id]?.name}</p>
              </InfoBox>
            </TileBox>
          )}
        </>
      );
    });

  const pageCount = Math.ceil(commentsList.length / commentsPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <>
      <SpaceBetweenDiv>
        <Title>{title}</Title>
        <Container>
          <Input
            type="text"
            placeholder="Fliter by title..."
            onChange={(event) => {
              setSearchTerm(event?.target.value);
            }}
          />
          <SearchIcon className="fas fa-search"></SearchIcon>
          <FollowedDropdown className="whiteBtn">Followed</FollowedDropdown>
        </Container>
      </SpaceBetweenDiv>
      {displayComments}
      <ReactPaginate
        previousLabel={<i className="fas fa-chevron-left"></i>}
        nextLabel={<i className="fas fa-chevron-right"></i>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBox"}
        previousLinkClassName={"paginationBtn"}
        nextLinkClassName={"paginationBtn"}
        disabledClassName={"paginationDisable"}
        activeClassName={"paginationAcive"}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
      />
    </>
  );
};

