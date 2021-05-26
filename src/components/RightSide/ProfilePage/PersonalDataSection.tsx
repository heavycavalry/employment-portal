import { Field, Form, Formik } from "formik";
import { FC, useState } from "react";
import styled from "styled-components";
import { EditBtn } from "../../common/EditButtonStyles";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";
import { SeeProfileBtn } from "../../TopBar/DropdownMenu";
import { FlexDiv } from "./ProfilePage";
import { Button, TextField } from "@material-ui/core";
import { FlexColumn } from "../../common/FlexColumn";
import React from "react";

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
const ContactDataBox = styled.div`
  width: 200px;
  position: absolute;
  bottom: 45px;
  right: 30px;
  ${FlexColumn}
`;
const PersonalInfoBox = styled.div`
  ${FlexColumn}
  margin-left: 10px;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const DataField = styled(Field)<{ disabled: boolean }>`
  border: ${({ disabled }) => (disabled ? "none" : "1px solid black")};
  background-color: ${({ disabled }) =>
    disabled ? "transparent" : "var(--platinium)"};
  padding: 2px 5px;
  margin: 1px;
`;

export const PersonalDataForm: FC = () => {
  const [isDisabled, setEdit] = useState(true);
  return (
    <Formik
      initialValues={{
        name: "Alex Rodriquez",
        street: "Street 232",
        city: "New-york",
        position: "Partner",
        mail: "alex_rodriguez@gmail.com",
        phone: "+ 33(0) 12 34 56 78",
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        //make asunc call
        console.log(data.name);
        setSubmitting(false);
      }}
    >
      {({ values, isSubmitting }) => (
        <StyledForm>
          <EditBtn
            onClick={() => (isDisabled ? setEdit(false) : setEdit(true))}
          >
            <i className="fas fa-pencil-alt"></i>
          </EditBtn>
          <PersonalInfoBox>
            <DataField disabled={isDisabled} name="name" type="text" />
            <DataField disabled={isDisabled} name="street" type="input" />
            <DataField disabled={isDisabled} name="city" type="input" />
            <DataField disabled={isDisabled} name="position" type="input" />
          </PersonalInfoBox>
          <ContactDataBox>
            <DataField disabled={isDisabled} name="mail" type="input" />
            <DataField disabled={isDisabled} name="phone" type="input" />
          </ContactDataBox>
        </StyledForm>
      )}
    </Formik>
  );
};
export const PersonalDataSection: FC = () => (
  <Wrapper>
    <FlexDiv>
      <InnerBox>
        <Image src="https://thispersondoesnotexist.com/image" alt="" />
        <SeeProfileBtn to="/">See profile</SeeProfileBtn>
      </InnerBox>
      <PersonalDataForm />
    </FlexDiv>
  </Wrapper>
);
