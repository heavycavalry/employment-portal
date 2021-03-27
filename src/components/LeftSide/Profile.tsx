import React, { FC } from 'react'
import styled from 'styled-components'
import styles from '../../styles/LeftSide.module.css'
import BottomProfileLink from './BottomProfileLink'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2em;
  border-radius: 5px;
  background-color: white;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  flex-direction: column;
  justify-content: center;
  min-width: 20em;
`
class Profile extends React.Component {
  state = {
    photo: 'https://www.linkpicture.com/q/photo_10.png',
    name: 'Ferdynand Kiepski',
    job: 'Happy Unemployed',
  }
  render() {
    return (
      <Wrapper>
        {ProfileInfo(this.state.photo, this.state.name, this.state.job)}
        <BottomProfileLink />
      </Wrapper>
    )
  }
}

const ProfileInfo = (photo: string, name: string, job: string) => (
  <div className={styles.profileBox}>
    <img className={styles.profilePhoto} src={photo} alt="" />
    <p className={styles.profileName}>{name}</p>
    <p className={styles.profileJobTitle}>Job title - {job}</p>
  </div>
)

export default Profile
