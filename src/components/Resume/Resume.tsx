import React, { FC, useState } from "react";
import styled from "styled-components";
import { InnerSlider, MediumText, Title } from "../../styledComponents/Workspaces_styled";
import { IRandomNumber } from "../../App";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { RightActionButtons } from "../RightSide/Entities/RightActionButtons";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { Wrapper } from "../RightSide/Entities/TopEntities";

const TileTitle = styled.p`
color: var(--blue);
font-weight: bold;
  font-size: 1.2rem;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const TileText = styled.p`
margin: 10px 0;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const TileBox = styled.div`
  margin: 10px 0;
  padding: 20px 30px;
  background: white;
  border-radius: 5px;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: flex-start; 
  color: var(--mediumGray);
  font-size: 0.82rem;
  > * {
    margin: 0 5px;
  } 
  > :first-child {
    margin-left: 0 !important;
  }
  > :nth-child(-n+2) {
    &:after {
      content: "•";
      padding-left: 5px;
    }
  }
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
    <InfoBox>
    <p>{usersList[id]?.name} </p>
    <p>Communication   </p>
    <p>Updated 3 days ago by {usersList[id]?.name}</p>
    </InfoBox>
  </TileBox>
    );
  });

  const pageCount = Math.ceil(commentsList.length / commentsPerPage)
  const changePage = ({selected}:any) => {
    setPageNumber(selected);
  }

  return (
    <>
      <TopResume/>
      {displayComments}
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
    </>
  )
}

const TopResume: FC = () => (
  <Wrapper>
    <Title>Resume your work</Title>
      <RightActionButtons placeholder="Filter by title..." />
  </Wrapper>
);
