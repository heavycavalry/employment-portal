import { FC } from "react";
import styled from "styled-components";
import { EditButton } from "../../common/EditButton";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";
import { SeeProfileBtn } from "../../TopBar/DropdownMenu";
import { DataText, FlexDiv } from "./ProfilePage";

const Image = styled.img`
  width: 90px;
  border-radius: 50%;
`;
const Wrapper = styled.div`
  ${CommonWrapper};
  position: relative;
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PersonalDataBox = styled.div`
  padding-left: 20px;
`;
const Mail = styled.a`
  position: absolute;
  bottom: 45px;
  right: 20px;
`;

const Phone = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const PersonalDataSection: FC = () => (
    <Wrapper>
      <FlexDiv>
        <InnerBox>
          <Image src="https://thispersondoesnotexist.com/image" alt="" />
          <SeeProfileBtn to="/">See profile</SeeProfileBtn>
        </InnerBox>
        <PersonalDataBox>
          <DataText>Alex Rodriguez</DataText>
          <DataText>Clifford Chance</DataText>
          <DataText>New-york</DataText>
          <DataText>Partner</DataText>
        </PersonalDataBox>
      </FlexDiv>
      <Mail>alex_rodriguez@gmail.com</Mail>
      <Phone>+ 33(0) 12 34 56 78</Phone>
      <EditButton />
    </Wrapper>
  );