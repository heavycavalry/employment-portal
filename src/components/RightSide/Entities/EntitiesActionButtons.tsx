import React, { FC } from 'react'
import { LeftActionButtons } from './LeftActionButtons';
import { RightActionButtons } from './RightActionButtons';
import { Wrapper } from './TopEntities';


export const EntitiesActionButtons: FC = () => {
    return (
        <Wrapper>
        <LeftActionButtons />
        <RightActionButtons placeholder="Search..."/>
        </Wrapper>
    )
}


