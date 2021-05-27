import { MenuItem } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { FC } from "react";
import { EditBtn } from "../../common/EditButtonStyles";
import { PanelInformations } from "./PanelInformations";
import { FlexDiv, InfoWrapper, TileBox, Title } from "./ProfilePage_styles";

export const FormSection: FC = () => {
  const [isDisabled, setEdit] = React.useState(true);
  const [expertise, setExpertise] = React.useState("Mergers and acquisition");
  const [speciality, setSpeciality] = React.useState("Cross border operation");
  const [transaction, setTransaction] = React.useState("1000");
  const [country, setCountry] = React.useState("Poland");
  const [admission, setAdmission] = React.useState("German");
  const [secondAdmission, setSecondAdmission] = React.useState("Tunisian");
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
      }}
      onSubmit={() => {}}
    >
      {({ values, initialValues }) => (
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
          <PanelInformations disable={isDisabled} />
        </>
      )}
    </Formik>
  );
};
