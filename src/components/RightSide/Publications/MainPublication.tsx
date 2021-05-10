import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { IRandomNumber } from '../../../App'
import { IState } from '../../../reducers'
import { IUsersReducer } from '../../../reducers/usersReducers'
import { PublicationBottomInfo } from './PublicationsBottomInfo'

const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  background-repeat: no-repeat;
  background-image: url('https://i.picsum.photos/id/668/200/200.jpg?hmac=mVqr1fc4nHFre2QMZp5cuqUKLIRSafUtWt2vwlA9jG0');
  background-size: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`
const Overlay = styled.div`
  position: absolute;
  background: var(--overlay);
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`
const InfoDiv = styled.div`
  margin: 20px;
  line-height: 1.5;
  position: absolute;
  z-index: 1;
  bottom: 0;
  color: white;
`
export const Text = styled.p`
  font-size: 1rem;
  &::first-letter {
  text-transform: uppercase;
  }
`
export const InfoText = styled.p`
font-size: 0.9rem;
font-weight: bold;
color: var(--gray);
`
const MainPublication: FC<IRandomNumber> = ({id}) => (
  <ImageContainer>
    <Overlay/>
    <BottomPublication id={id}/>
  </ImageContainer>
)

const BottomPublication: FC<IRandomNumber> = ({id}) => (
  <InfoDiv>
    <PublicationText />
    <PublicationBottomInfo id={id}/>
  </InfoDiv>
)

const PublicationText: FC = () => {
  const { postsList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  return(
  <Text>
    {postsList[1]?.body}
  </Text>)

  }


export default MainPublication
