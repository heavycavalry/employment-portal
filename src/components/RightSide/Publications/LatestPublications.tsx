import React, {FC} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { IState } from '../../../reducers'
import { IUsersReducer } from '../../../reducers/usersReducers'
import { Text } from './MainPublication'
import { PublicationBottomInfo } from './PublicationsBottomInfo'

const TextContainer = styled.div`
  margin: 2em;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar{
     width: 10px;
};
&::-webkit-scrollbar-track {
  background: #f1f1f1; 

};
&::-webkit-scrollbar-thumb {
  background: var(--blue);
  border-radius: calc(15px / 2);
&:hover {
  background-color: black;
  }};`


  const PublicationWrapper = styled.div`
  width: 90%;
  text-align: justify;
  margin: 10px;
  padding: 10px;
  box-shadow: var(--shadow);
  border-radius: 5px;
  background-color: white;
  `
  const Photo = styled.img`
  float: left;
  width:  80px;
  margin: 0 10px;
  `

const LatestPublications: FC = () => (
  <TextContainer>
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
    <Publication />
  </TextContainer>
)

export class Publication extends React.Component {
render() {
    return (
      <PublicationWrapper>
        <PublicationPhoto/>
        <PublicationTopInfo/>
        <PublicationBottomInfo />
      </PublicationWrapper>
    )
}
}

const PublicationPhoto: FC = () => (
  <Photo src="https://i.picsum.photos/id/954/200/200.jpg?hmac=U_V-b3xGbMM1KTSaB5KKqncFD4fmOVG5iK39Bjd9DoQ" alt=""/>
)

export const PublicationTopInfo: FC = (x) => {
  const { postsList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  return (
    <Text>
      {postsList[1]?.body}   
    </Text>
  )
}


export default LatestPublications
