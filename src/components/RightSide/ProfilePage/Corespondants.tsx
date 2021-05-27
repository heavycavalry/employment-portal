import { MenuItem } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IDisable } from "./ProfilePage";
import { BorderBox, FlexDiv, MessageLink, ProfileLink, SmallImage, StyledPlainSelect } from "./ProfilePage_styles";

interface ICorespondant {
    defaultName: string;
    image: string;
  }
  
  export const Corespondant: FC<IDisable & ICorespondant> = ({
    disable,
    defaultName,
    image,
  }) => {
    const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
      ...globalState.users,
    }));
    const [user, setUser] = React.useState(defaultName);
    const handleUserChange = (event: any) => {
      setUser(event.target.value);
    };
  
    return (
      <Formik
        enableReinitialize
        initialValues={{
          users: usersList.map((user) => user["name"]),
        }}
        onSubmit={() => {}}
      >
        {({ values }) => (
          <BorderBox>
            <FlexDiv>
              <SmallImage src={image} alt="" />
              <StyledPlainSelect
                disabled={disable}
                value={user}
                onChange={handleUserChange}
                labelId="label"
                id="select"
              >
                {values.users.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
            </FlexDiv>
            <FlexDiv>
              <MessageLink>Message</MessageLink>
              <ProfileLink>Profile</ProfileLink>
            </FlexDiv>
          </BorderBox>
        )}
      </Formik>
    );
  };