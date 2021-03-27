import React, { FC } from 'react'
import styled from 'styled-components'
import styles from '../../styles/Navigation.module.css'

class Dropdown extends React.Component {
  state = {
    toggleDown: false,
  }
  
  render() {
    return (
      <section className={styles.dropdownBox}>
        <div onClick={this.handleClick} className={styles.dropdownLink}>
          <p>Home</p>
          <img
            src={process.env.PUBLIC_URL + '/Icons/arrow-down.svg'}
            alt="arrow icon"
          />
        </div>
        <div className={styles.dropdown}>
            <ul className={this.state.toggleDown ? styles.showDropdown : styles.hidden}>
              <li>Profile</li>
              <li>Publications</li>
              <li>Contacts</li>
              <li>Settings</li>
              <li>Log out</li>
            </ul>
          </div>
      </section>
    )
  }

  handleClick() {
    this.state.toggleDown
      ? this.setState({
          toggleDown: false,
        })
      : this.setState({
          toggleDown: true,
        })
  }
}

export default Dropdown
