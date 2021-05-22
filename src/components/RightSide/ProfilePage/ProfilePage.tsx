import { FC } from "react";
import styled from "styled-components";
import { FontAwesome } from "../../common/FontAwesome";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";
import { CommonContact, MessageLink, TopContactBtns } from "./ContactButtons";
import { PersonalDataSection } from "./PersonalDataSection";
import { TileSection, Title } from "./TilesSection";

const MainContainer = styled.div`
  background-color: white;
  max-width: 60em;
  margin: 0 auto;
  border-radius: 5px;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const DataText = styled.p`
  margin: 2px 5px;
  &:first-child {
    font-weight: bolder;
  }
`;

const BorderBox = styled.div`
position: relative;
  border: 2px solid var(--platinium);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  margin-top: 10px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: var(--platinium);
  }
`;

const SmallImage = styled.img`
  width: 50px;
  border-radius: 50%;
`;
const ProfileLink = styled.a`
  ${CommonContact}
  &::before {
    ${FontAwesome}
    content: "\f406";
  }
`;

const Name = styled.p`
  font-weight: bold;
  color: var(--black);
  margin: 10px;
`;

const PanelWrapper = styled.div`
  ${CommonWrapper};
  flex-direction: column;
  >p:nth-child(2n) {
    margin-bottom: 20px;
  }
`;

const AtachmentBox = styled.div`
width: 325px;
margin-bottom: 20px;
> div::before {
  ${FontAwesome}
  content: "\f15b";
}`

export const ProfilePage: FC = () => (
  <MainContainer>
    <TopContactBtns />
    <PersonalDataSection />
    <TileSection />
    <PanelInformations />
  </MainContainer>
);

const PanelInformations: FC = () => (
  <PanelWrapper>
    <Title>Hourly free</Title>
    <p>610€/hour (Negociated)</p>
    <Title>Terms & Conditions</Title>
    <AtachmentBox>
      <p>Monthly 10k€ retainer - see with Jeanny Smith</p>{" "}
      <BorderBox>Attachment_veryimportantstuff123.jpg</BorderBox>
    </AtachmentBox>
    <Title>Services & Projects</Title>
    <p>Corporate M&A and international acquisitions</p>
    <Title>Internal correspondants</Title>
    <Corespondant />
    <Corespondant />
  </PanelWrapper>
);

const Corespondant: FC = () => (
  <BorderBox>
    <FlexDiv>
      <SmallImage src="https://thispersondoesnotexist.com/image" alt="" />
      <Name>Firstname Lastname</Name>
    </FlexDiv>
    <FlexDiv>
      <MessageLink>Message</MessageLink>
      <ProfileLink>Profile</ProfileLink>
    </FlexDiv>
  </BorderBox>
);
