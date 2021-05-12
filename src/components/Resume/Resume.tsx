import React, { FC, useState } from "react";
import styled from "styled-components";
import { InnerSlider, MediumText, Title } from "../../styledComponents/Workspaces_styled";
import { IRandomNumber } from "../../App";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Wrapper } from "../RightSide/Entities/TopEntities";
import { RightActionButtons } from "../RightSide/Entities/RightActionButtons";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

const TileTitle = styled.p`
  font-size: 1.2rem;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const TileText = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;
const TileBox = styled.div`
  margin: 10px 0;
  padding: 10px 20px;
  background: white;
`;

const InnerDiv = styled.div`
  margin: 20px 0;
`;

export const Resume: FC<IRandomNumber> = ({id}:any) => {
  const { commentsList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));

  const [pageNumber, setPageNumber] = useState(0);
  const commentsPerPage = 5;
  const pagesVisited = pageNumber * commentsPerPage;

  const displayComments = commentsList
  .slice(pagesVisited, pagesVisited + commentsPerPage)
  .map((comment) => {
    return (
    <TileBox>
    <TileTitle>{comment.name}</TileTitle>
    <TileText>{comment.body}</TileText>
    <MediumText>{usersList[id]?.name} • </MediumText>
    <MediumText>Communication • </MediumText>
    <MediumText>Updated 3 days ago by {usersList[id]?.name}</MediumText>
  </TileBox>
    );
  });

  const pageCount = Math.ceil(commentsList.length / commentsPerPage)
  const changePage = ({selected}:any) => {
    setPageNumber(selected);
  }

  return (
    <>
      <InnerDiv>
      <TopResume/>
      {displayComments}
      </InnerDiv>
      <InnerDiv>
      <ReactPaginate
        previousLabel ={<i className="fas fa-chevron-left"></i>}
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
      </InnerDiv>
    </>
  )
}

const TopResume: FC = () => (
  <Wrapper>
    <Title>Resume your work</Title>
    <InnerDiv>
      <RightActionButtons placeholder="Filter by title..." />
    </InnerDiv>
  </Wrapper>
);
