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

const AddFile = styled.input`
margin-top: 10px;
&::-webkit-file-upload-button {
  visibility: hidden;
}
&::before {
  content: 'Choose file';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
&:hover::before {
  border-color: black;
}
&:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}`

const SmallImage = styled.img`
  width: 60px;
  height: 60px;
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
      <AddFile id="file" name="file" type="file"></AddFile>
    </AtachmentBox>
    <Title>Services & Projects</Title>
    <p>Corporate M&A and international acquisitions</p>
    <Title>Internal correspondants</Title>
    <Corespondant photo="https://www.oneplanetnetwork.org/sites/default/files/profile-leena.jpg" name="Michalina" surname="Durszlak"/>
    <Corespondant photo="https://simplybeautysydney.files.wordpress.com/2013/01/brad-profile-square.jpg" name="Paul" surname="Wind"/>
  </PanelWrapper>
);

const Corespondant: FC<ICorespondant> = (props) => (
  <BorderBox>
    <FlexDiv>
      <SmallImage src={props.photo} alt="profile"/>
      <Name>{props.name} {props.surname}</Name>
    </FlexDiv>
    <FlexDiv>
      <MessageLink>Message</MessageLink>
      <ProfileLink>Profile</ProfileLink>
    </FlexDiv>
  </BorderBox>
);

interface ICorespondant {
  photo: string
  name: string
  surname: string
}