import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { MediumText, Title } from "../../styledComponents/Workspaces_styled";
import { RightActionButtons } from "../RightSide/Entities/RightActionButtons";
import { Wrapper } from "../RightSide/Entities/TopEntities";

const Div = styled.div`
  margin-top: 30px;
`;
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
  margin: 10px;
  padding: 10px 20px;
  background: white;
`;

export const Resume: FC = () => {
  const { commentsList } = useSelector<IState, IUsersReducer>(
    (globalState) => ({
      ...globalState.users,
    })
  );
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return (
    <>
      <TopResume />
      <ResumeTile
        title={commentsList[1]?.name}
        body={commentsList[1]?.body}
        company="Subsid.corp."
        topic="Corporate"
        name={usersList[1]?.name}
      />
      <ResumeTile
        title={commentsList[1]?.name}
        body={commentsList[1]?.body}
        company="Subsid.corp."
        topic="Corporate"
        name={usersList[1]?.name}
      />
      <ResumeTile
        title={commentsList[1]?.name}
        body={commentsList[1]?.body}
        company="Subsid.corp."
        topic="Corporate"
        name={usersList[1]?.name}
      />
      <ResumeTile
        title={commentsList[1]?.name}
        body={commentsList[1]?.body}
        company="Subsid.corp."
        topic="Corporate"
        name={usersList[1]?.name}
      />
    </>
  );
};

const TopResume: FC = () => (
  <Wrapper>
    <Title>Resume your work</Title>
    <Div>
      <RightActionButtons placeholder="Filter by title..." />
    </Div>
  </Wrapper>
);

interface IResumeTile {
  title: string;
  body: string;
  company: string;
  topic: string;
  name: string;
}

const ResumeTile: FC<IResumeTile> = (props) => (
  <TileBox>
    <TileTitle>{props.title}</TileTitle>
    <TileText>{props.body}</TileText>
    <MediumText>{props.company} • </MediumText>
    <MediumText>{props.topic} • </MediumText>
    <MediumText>Updated 3 days ago by {props.name}</MediumText>
  </TileBox>
);
