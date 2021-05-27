import { Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { EditBtn } from "../../common/EditButtonStyles";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";
import { SeeProfileBtn } from "../../TopBar/DropdownMenu";
import { FlexColumn } from "../../common/FlexColumn";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IRandomNumber } from "../../../App";
import { FlexDiv } from "./ProfilePage_styles";

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
  position: absolute;
  bottom: 25px;
  right: 40px;
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
export const DataField = styled(Field)<{ disabled: boolean }>`
  border: none;
  ${({ disabled }) => (disabled ? "min-width: fit-content" : "width: 350px")};
  border-bottom: ${({ disabled }) =>
    disabled ? "none" : "1px solid var(--shadowBlue)"};
  background: none;
  padding: 2px 5px;
  margin-bottom: 3px;
  &:focus {
    outline: none;
  }
`;

export const PersonalDataForm: FC<IRandomNumber> = ({ id }) => {
  const [isDisabled, setEdit] = useState(true);
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: usersList[id]?.name,
        street:
          usersList[id]?.address.street + " " + usersList[id]?.address.suite,
        city: usersList[id]?.address.city,
        position: "Partner",
        mail: usersList[id]?.email,
        phone: usersList[id]?.phone,
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log(data.name);
        setSubmitting(false);
      }}
    >
      {() => (
        <StyledForm>
          <EditBtn
            onClick={() => (isDisabled ? setEdit(false) : setEdit(true))}
          >
            <i className="fas fa-pencil-alt"></i>
          </EditBtn>
          <PersonalInfoBox>
            <DataField disabled={isDisabled} name="name" type="text" />
            <DataField disabled={isDisabled} name="street" type="text" />
            <DataField disabled={isDisabled} name="city" type="text" />
            <DataField disabled={isDisabled} name="position" type="text" />
          </PersonalInfoBox>
          <ContactDataBox>
            <DataField disabled={isDisabled} name="mail" type="text" />
            <DataField disabled={isDisabled} name="phone" type="text" />
          </ContactDataBox>
        </StyledForm>
      )}
    </Formik>
  );
};
export const PersonalDataSection: FC<IRandomNumber> = ({ id }) => (
  <Wrapper>
    <FlexDiv>
      <InnerBox>
        <Image src="https://thispersondoesnotexist.com/image" alt="" />
        <SeeProfileBtn to="/">See profile</SeeProfileBtn>
      </InnerBox>
      <PersonalDataForm id={id} />
    </FlexDiv>
  </Wrapper>
);
