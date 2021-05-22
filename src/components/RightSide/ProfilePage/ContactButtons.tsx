import { FC } from "react";
import styled from "styled-components";
import { BtnRemoveStyles } from "../../common/BtnRemoveStyles";
import { FontAwesome } from "../../common/FontAwesome";

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CommonContact = `
margin: 10px;
color: var(--blue);
font-size: 0.95rem;
position: relative;
transition: 0.3s;
&:hover:after {
  content:"";
  position: absolute;
  display: block;
  width: 100%;  
  border: 1px solid var(--blue);
}
`;
const ContactLink = styled.a`
  ${CommonContact}
  &:nth-child(2) {
    &::before {
      ${FontAwesome}
      content: "\f15c";
    }
  }
  &:nth-child(3) {
    ${CommonContact}
    &::before {
      ${FontAwesome}
      content: "\f0b1";
    }
  }
`;
export const MessageLink = styled.a`
  ${CommonContact}
  &::before {
    ${FontAwesome}
    content: "\f0e0";
  }
`;
const CloseBtn = styled.button`
  ${BtnRemoveStyles}
  margin-right: 20px;
  color: var(--blue);
`;
export const TopContactBtns: FC = () => (
  <BtnsWrapper>
    <MessageLink href="#">Message</MessageLink>
    <ContactLink href="#">Create request</ContactLink>
    <ContactLink href="#">Add to a cluster</ContactLink>
    <CloseBtn>✖</CloseBtn>
  </BtnsWrapper>
);
