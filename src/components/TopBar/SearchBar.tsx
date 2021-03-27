import React, { FC } from 'react'
import styled from 'styled-components'
import styles from '../../styles/Navigation.module.css'

export const Wrapper = styled.div`
  min-width: 40%;
  justify-content: center;
  position: relative;
`

const SearchBar: FC = () => (
  <Wrapper>
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Search Legalcluster"
    />
    <img
      onClick={handleClick}
      className={styles.searchIcon}
      src={process.env.PUBLIC_URL + '/Icons/entities.svg'}
      alt="search icon"
    />
  </Wrapper>
)

const handleClick = () => {
  //TODO && enter
}

export default SearchBar
