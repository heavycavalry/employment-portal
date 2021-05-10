import React, {FC} from 'react'
import styled from 'styled-components'
import styles from '../../styles/LeftSide.module.css'
import BottomProfileLink from './BottomProfileLink'
import { useSelector } from 'react-redux'
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'
import { IRandomNumber } from '../../App'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2em;
  border-radius: 5px;
  background-color: white;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  @media (max-width: 900px) {
    border-right: 6px solid var(--blue);
    border-left: 6px solid var(--blue);
    width: 25em;
  }`

export const Profile: FC<IRandomNumber> = ({id}) => {
  const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  const { photosList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  return (
          <Wrapper>
            {ProfileInfo(photosList[id]?.url, usersList[id]?.name, "Software Developer")}
            <BottomProfileLink />
          </Wrapper>
        )
}

const ProfileInfo = (photo: string, name: string, job: string) => (
  <div className={styles.profileBox}>
    <img className={styles.profilePhoto} src={photo} alt="" />
    <p className={styles.profileName}>{name}</p>
    <p className={styles.profileJobTitle}>Job title - {job}</p>
  </div>
)

export default Profile
