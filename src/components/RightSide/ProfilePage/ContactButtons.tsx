import { FC } from "react";
import { BtnsWrapper, CloseBtn, ContactLink, MessageLink } from "./ProfilePage_styles";


export const TopContactBtns: FC = () => (
  <BtnsWrapper>
    <MessageLink href="#">Message</MessageLink>
    <ContactLink href="#">Create request</ContactLink>
    <ContactLink href="#">Add to a cluster</ContactLink>
    <CloseBtn>✖</CloseBtn>
  </BtnsWrapper>
);
