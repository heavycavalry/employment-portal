import React, {FC} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { IState } from '../../../reducers'
import { IUsersReducer } from '../../../reducers/usersReducers'

const InfoWrapper = styled.div`
margin-top: 10px;
display: flex;
`

export const InfoText = styled.p`
font-size: 0.9rem;
font-weight: bold;
color: var(--gray);
`
export const Image = styled.img`
  border-radius: 50%;
  width: 20px;
  margin: 0 10px;`
  
  
export const PublicationBottomInfo: FC = () => {
    const { photosList } = useSelector<IState, IUsersReducer>(globalState => ({
      ...globalState.users
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
      ...globalState.users
    }));
    return (
    <InfoWrapper>
    <InfoText>20 jan 2021</InfoText>
    <Image src={photosList[1]?.url} alt="" />
    <InfoText>{usersList[1]?.name}</InfoText>
    </InfoWrapper>
  )
  }