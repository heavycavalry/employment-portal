import { Button } from "@material-ui/core";
import React, { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StringLiteralLike } from "typescript";
import { IRandomNumber } from "../../../App";
import { Title, Wrapper } from "../../../styledComponents/Workspaces_styled";
import { FontAwesome } from "../../common/FontAwesome";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";
import { WhiteBgShadowBox } from "../../common/WhiteBgShadowBox";
import { SpaceBetweenDiv } from "../Entities/TopEntities";
import { FlexDiv, PanelWrapper } from "../ProfilePage/ProfilePage_styles";
import { Resume } from "../Resume/Resume";
import { Slider } from "./Slider";

const Image = styled.img`
  width: 100%;
`;
const ImageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const AbsoluteDiv = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 40%;
  background-color: var(--opacityWhite);
  bottom: 0;
`;

const TextDiv = styled.div`
  &:before {
    ${FontAwesome}
    content: "\f1ad";
    font-size: 4.5rem;
    margin: 0 50px;
    float: left;
  }
`;

const WorspacesTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  color: var(--blue);
`;

const WorkspacesText = styled.p`
  max-width: 800px;
  margin: 5px;
  color: var(--darkGray);
  font-weight: bold;
`;

export const Workspaces: FC = () => {
  return (
    <Wrapper>
      <Title>WORKSPACES</Title>
      <Slider />
    </Wrapper>
  );
};

interface IWorkspacesProps {
  title: string;
  description: string;
  image: string;
}

export const WorkspacesPage: FC<IWorkspacesProps & IRandomNumber> = ({
  id,
  image,
  title,
  description,
}) => (
  <>
      <ImageDiv>
        <Image src={image} alt="" />
        <AbsoluteDiv>
          <TextDiv>
            <WorspacesTitle>{title}</WorspacesTitle>
            <WorkspacesText>{description}</WorkspacesText>
          </TextDiv>
        </AbsoluteDiv>
      </ImageDiv>
      <SpaceBetweenDiv>
        <Title>Start working on corporate matters</Title>
        <Button>Hide</Button>
      </SpaceBetweenDiv>
      <WorkspacesBoxes />
    <Resume id={id} />
  </>
);

const FlexSpaceDiv = styled(FlexDiv)`
justify-content: space-between;
`

const BoxDiv = styled.div`
${WhiteBgShadowBox}
text-align: justify;
width: 280px;
padding: 20px;
`

const BoxTitle = styled.h3<{ beforeimg: string }>`
  ::before {
    ${FontAwesome}
    content: '${({ beforeimg }) => beforeimg}';
    font-size: 3rem;
  }
`;

const WorkspacesBoxes: FC = () => {
  const boxData = [
    {
      icon: "\f1ad",
      title: "Explore your entities",
      description:
        "Take a few minutes to look at the most important elements and specificities of your entities.",
    },
    {
      icon: "\f542",
      title: "Structure the ownership",
      description:
        "Get a clear view of the ownership by looking at the relations between individuals and entities.",
    },
    {
      icon: "\f073",
      title: "Define the calendar",
      description:
        "Prepare future events by creating detailed plans around the life of your entity.",
    },
  ];
  return (
    <FlexSpaceDiv>
      {boxData.map((value) => (
        <BoxDiv>
          <BoxTitle beforeimg={value.icon}>{value.title}</BoxTitle>
          <p>{value.description}</p>
        </BoxDiv>
      ))}
    </FlexSpaceDiv>
  );
};
