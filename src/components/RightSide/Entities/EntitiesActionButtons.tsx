import React, { FC } from 'react'
import { Container, FollowedDropdown, Input, SearchIcon } from '../../../styledComponents/FilterFollowedBtns';
import { LeftActionButtons } from './LeftActionButtons';
import { Wrapper } from './TopEntities';


export const EntitiesActionButtons: FC = () => {
    return (
        <Wrapper>
        <LeftActionButtons />
        <Container>
          <Input type="text" placeholder="Search..." />
          <SearchIcon className="fas fa-search"></SearchIcon>
          <FollowedDropdown className="whiteBtn">Followed</FollowedDropdown>
        </Container>
        </Wrapper>
    )
}


