import { FC } from "react";
import styled from "styled-components";
import { EditButton } from "../../common/EditButton";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";
import { FlexDiv } from "./ProfilePage";

const InfoWrapper = styled.div`
  ${CommonWrapper};
  flex-direction: column;
  position: relative;
`;

interface ITileInfo {
  text: string;
}

const Tile: FC<ITileInfo> = (props) => <TileBox>{props.text}</TileBox>;

export const Title = styled.p`
  color: var(--blue);
  font-weight: bold;
  margin-bottom: 10px;
`;
export const TileBox = styled.div`
  background-color: var(--shadowBlue);
  border-radius: 5px;
  width: fit-content;
  padding: 5px 10px;
  color: var(--blue);
  font-weight: bold;
  margin: 0px 10px 20px 0;
`;


export const TileSection: FC = () => (
    <InfoWrapper>
      <Title>Expertise</Title>
      <FlexDiv>
        <Tile text="Merges and acquisition" />
      </FlexDiv>
      <Title>Specialties</Title>
      <FlexDiv>
        <Tile text="Cross border operation" />
        <Tile text="Transaction over 500M€/$" />
      </FlexDiv>
      <Title>Admission to practice law</Title>
      <FlexDiv>
        <Tile text="Paris bar association" />
        <Tile text="Tunisian bar association" />
      </FlexDiv>
      <Title>Counties</Title>
      <FlexDiv>
        <Tile text="Tunisia" />
      </FlexDiv>
      <EditButton />
    </InfoWrapper>
  );