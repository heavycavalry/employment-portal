import React, { FC, useState } from 'react'
import { Container, FollowedDropdown, Input, SearchIcon } from '../../../styledComponents/FilterFollowedBtns';
import { LeftActionButtons } from './LeftActionButtons';
import { SpaceBetweenDiv } from './Entities_styles';
import styled from "styled-components";

export const EntitiesActionButtons: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
    return (
        <SpaceBetweenDiv>
        <LeftActionButtons />
        <Container>
          <Input type="text" placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event?.target.value);
        }}/>
          <SearchIcon className="fas fa-search"></SearchIcon>
          <FollowedDropdown className="whiteBtn">Followed</FollowedDropdown>
        </Container>
        </SpaceBetweenDiv>
    )
}


