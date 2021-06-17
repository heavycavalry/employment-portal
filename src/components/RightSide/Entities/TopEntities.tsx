import { FC } from "react";
import {
  SpaceBetweenDiv,
  Title,
  MosaicBtn,
  BtnBox,
  ListBtn,
} from "./Entities_styles";

export const TopEntities: FC = () => {
  return (
    <SpaceBetweenDiv>
      <Title>Entities</Title>
      <BtnBox>
        <MosaicBtn className="mosaic-btn" onClick={SetMosaic}>
          Mosaic
        </MosaicBtn>
        <ListBtn className="list-btn" onClick={SetList}></ListBtn>
      </BtnBox>
    </SpaceBetweenDiv>
  );
};

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
  getEntitiesTiles().forEach((tile) => (tile.style.width = "100%"));
  getMosaicBtn().style.background = "var(--platinium)";
  getListBtn().style.background = "rgb(239, 239, 239)";
}

function SetMosaic() {
  getEntitiesContainer().style.gridTemplateColumns =
    "repeat(auto-fit, minmax(260px, 1fr))";
  getListBtn().style.background = "var(--platinium)";
  getMosaicBtn().style.background = "rgb(239, 239, 239)";
}
