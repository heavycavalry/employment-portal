import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { Formik, setNestedObjectValues } from "formik";
import React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { BtnRemoveStyles } from "../../common/BtnRemoveStyles";
import { EditBtn } from "../../common/EditButtonStyles";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";
import { FlexDiv, PanelInformations } from "./ProfilePage";

const InfoWrapper = styled.div`
  ${CommonWrapper};
  flex-direction: column;
  position: relative;
`;

export const Title = styled(InputLabel)`
  color: var(--blue) !important;
  font-weight: bold !important;
  margin-bottom: 10px;
`;
export const TileBox = styled(Select)<{ disabled: boolean }>`
  > svg {
    display: ${({ disabled }) => (disabled ? "none" : "block")};
  }
  background-color: var(--shadowBlue);
  border-radius: 5px;
  width: fit-content;
  padding: 2px 5px;
  color: var(--blue) !important;
  font-weight: bold !important;
  margin: 0px 10px 20px 0;
  &:hover {
    border: none;
  }
`;

export const TileSection: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const [isDisabled, setEdit] = React.useState(true);
  const [expertise, setExpertise] = React.useState("Mergers and acquisition");
  const [speciality, setSpeciality] = React.useState("Cross border operation");
  const [transaction, setTransaction] = React.useState("1000");

  const [country, setCountry] = React.useState("Poland");
  const [admission, setAdmission] = React.useState("German");
  const [secondAdmission, setSecondAdmission] = React.useState("Tunisian");
  const [user, setUser] = React.useState("Klaudia");
  const handleExperiseChange = (event: any) => {
    setExpertise(event.target.value);
  };
  const handleSpecialityChange = (event: any) => {
    setSpeciality(event.target.value);
  };
  const handleCountryChange = (event: any) => {
    setCountry(event.target.value);
  };
  const handleTransactionChange = (event: any) => {
    setTransaction(event.target.value);
  };
  const handleSecondAdmissionChange = (event: any) => {
    setSecondAdmission(event.target.value);
  };
  const handleAdmissionChange = (event: any) => {
    setAdmission(event.target.value);
  };
  const handleUserChange = (event: any) => {
    setUser(event.target.value);
  };
  const users = usersList.map((user) => user["name"]);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        specialities: [
          "Cross border operation",
          "Extra operation",
          "Backlog operation",
        ],
        expertises: [
          "Mergers and acquisition",
          "Technical Expertise",
          "The next generation",
        ],
        countries: ["Poland", "France", "Germany"],
        transactions: ["1000", "1500", "2000"],
        admissions: ["Tunisian", "German", "Polish", "Italian"],
        fee: "610€/hour(Negociated)",
        terms: "Monthly 10k€ retainer - see with Jeanny Smith",
        services: "Corporate M&A and international acquisitions",
        userNames : users,
        userName: user
      }}
      onSubmit={() => {}}
    >
      {({ values, initialValues}) => (
        <>
          <InfoWrapper>
            <Title id="label">Expertise</Title>
            <TileBox
              disabled={isDisabled}
              value={expertise}
              onChange={handleExperiseChange}
              labelId="label"
              id="select"
            >
              {values.expertises.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </TileBox>
            <Title id="label">Specialties</Title>
            <FlexDiv>
              <TileBox
                disabled={isDisabled}
                onChange={handleSpecialityChange}
                labelId="label"
                id="select"
                value={speciality}
              >
                {values.specialities.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </TileBox>
              <TileBox
                disabled={isDisabled}
                onChange={handleTransactionChange}
                labelId="label"
                id="select"
                value={transaction}
              >
                {values.transactions.map((value) => (
                  <MenuItem value={value}>
                    Transaction over {value}M€/$
                  </MenuItem>
                ))}
              </TileBox>
            </FlexDiv>
            <Title>Admission to practice law</Title>
            <FlexDiv>
              <TileBox
                disabled={isDisabled}
                onChange={handleAdmissionChange}
                labelId="label"
                id="select"
                value={admission}
              >
                {values.admissions.map((value) => (
                  <MenuItem value={value}>{value} bar association</MenuItem>
                ))}
              </TileBox>
              <TileBox
                disabled={isDisabled}
                onChange={handleSecondAdmissionChange}
                labelId="label"
                id="select"
                value={secondAdmission}
              >
                {values.admissions.map((value) => (
                  <MenuItem value={value}>{value} bar association</MenuItem>
                ))}
              </TileBox>
            </FlexDiv>
            <Title>Counties</Title>
            <TileBox
              disabled={isDisabled}
              onChange={handleCountryChange}
              labelId="label"
              id="select"
              value={country}
            >
              {values.countries.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </TileBox>
            <EditBtn
              onClick={() => (isDisabled ? setEdit(false) : setEdit(true))}
            >
              <i className="fas fa-pencil-alt"></i>
            </EditBtn>
          </InfoWrapper>
          <PanelInformations disable={isDisabled}/>
        </>
      )}
    </Formik>
  );
};
