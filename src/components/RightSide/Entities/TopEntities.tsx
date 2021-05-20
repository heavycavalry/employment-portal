import {FC} from 'react'
import styled from 'styled-components'
import { entitiesTileArray } from './Entities';

export const Wrapper = styled.div`
margin: 10px 0;
display: flex;
justify-content: space-between;
align-items: center;
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

export const Title = styled.h2`
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
            <MosaicBtn className="mosaic-btn" onClick={SetMosaic}>Mosaic</MosaicBtn>
            <ListBtn className="list-btn" onClick={SetList}></ListBtn>
        </BtnBox>
        </Wrapper>
    
    )
}

function getEntitiesContainer(): HTMLElement {
    return document.querySelector(".entities-container") as HTMLElement;
  }
  
function getEntitiesTiles(): NodeListOf<HTMLElement> {
    return document.querySelectorAll(".entities-tile-box");
  }

  function getMosaicBtn(): HTMLElement {
    return document.querySelector(".mosaic-btn") as HTMLElement;
  }
  
function getListBtn(): HTMLElement {
    return document.querySelector(".list-btn") as HTMLElement;
  }

function SetList() {
    getEntitiesContainer().style.gridTemplateColumns = "repeat(1, 1fr)";
    getEntitiesTiles().forEach(tile =>  tile.style.width = "100%");
    getMosaicBtn().style.background = "var(--platinium)";
    getListBtn().style.background = "rgb(239, 239, 239)";
}

function SetMosaic() {
    getEntitiesContainer().style.gridTemplateColumns = "repeat(auto-fit, minmax(260px, 1fr))";
    getListBtn().style.background = "var(--platinium)";
    getMosaicBtn().style.background = "rgb(239, 239, 239)";
}