import React, {FC} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { IRandomNumber } from '../../../App'
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
  height: fit-content;
  text-align: justify;
  margin: 10px;
  padding: 10px;
  box-shadow: var(--shadow);
  border-radius: 5px;
  background-color: white;
  position: relative;
  `
  const Photo = styled.img`
  float: left;
  width:  90px;
  margin: 0 10px;
  `

const LatestPublications: FC<IRandomNumber> = ({id}) => (
  <TextContainer>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
  </TextContainer>
)

export const Publication: FC<IRandomNumber> = ({id}) => {
    return (
      <PublicationWrapper>
        <PublicationPhoto id={id}/>
        <PublicationTopInfo/>
        <PublicationBottomInfo id={id}/>
      </PublicationWrapper>
    )
}

const PublicationPhoto: FC<IRandomNumber> = ({id}) => {
  const { photosList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  return (
  <Photo src={photosList[id]?.url} alt=""/>)
}

export const PublicationTopInfo: FC = () => {
  const { postsList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  const randomNumber = Math.floor(Math.random()*100);
  return (
    <Text>
      {postsList[randomNumber]?.body}   
    </Text>
  )
}


export default LatestPublications
