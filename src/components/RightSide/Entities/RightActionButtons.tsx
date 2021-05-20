import React, { FC } from 'react'
import styled from 'styled-components'


const Container = styled.div`
position: relative;
`
const Input = styled.input`
border: none;
padding:2px;
`
const SearchIcon = styled.i`
position: absolute;
top: 4px;
right: 150px;
color: gray;
`
const FollowedDropdown = styled.button`
margin-left: 10px;
&::before {
    padding-left: 5px;
    content: "\f1ce";
    padding-right:10px;
}
&::after {
    padding: 0 5px 0 10px;
    content: "\f078";
}`

export interface IPlaceholder {
    placeholder: string;
}

export const RightActionButtons: FC<IPlaceholder> = (props) => {
    return (
        <Container>
           <Input type="text" placeholder={props.placeholder}/>
           <SearchIcon className="fas fa-search"></SearchIcon>
            <FollowedDropdown className="whiteBtn">Followed</FollowedDropdown>
           </Container>

    )
}