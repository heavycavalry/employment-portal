import React, {FC} from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
margin-left: 10px;
display: flex;
justify-content: space-between;
`;
const BtnBox = styled.div`
display: flex;
margin-bottom: 15px;

`;
const MosaicBtn = styled.button`
cursor: pointer;
padding: 8px 5px;
font-size: 0.8rem;
border: none;
&::before {
    padding: 2px 5px;
    font-family: "Font Awesome 5 Free";
    color: gray;
    font-weight: 900;
    content: "\f009";
    display: inline-block;
}
`;
const ListBtn = styled.button`
padding: 5px;
cursor: pointer;
border: none;
border-left: 2px solid #bebebe;
&::before {
    padding: 2px 5px;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f03a";
    color: gray;
    display: inline-block;

}
`;
const Title = styled.h2`
text-transform:uppercase;
&::after {
    content: "\f013";
    padding: 10px;
    color: gray;
}
`;
const Icon = styled.i`
`;

export const TopEntities: FC = () => {
    return (
        <Wrapper>
        <Title>Entities</Title>
        <Icon></Icon>
        <BtnBox>
        <MosaicBtn>Mosaic</MosaicBtn>
        <ListBtn></ListBtn>
        </BtnBox>
        </Wrapper>
    )
}