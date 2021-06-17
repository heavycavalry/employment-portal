import { MenuItem } from "@material-ui/core";
import { Formik } from "formik";
import React, { FC, useState } from "react";
import { IDisable } from "./ProfilePage";
import {
  FeesGrid,
  PanelWrapper,
  StyledPlainSelect,
  Title,
} from "./ProfilePage_styles";

export const Fees: FC<IDisable> = ({ disable }) => {
  const [year, setYear] = useState("2019");
  const [cost, setCost] = useState("153");
  const [amount, setAmount] = useState("3 500$");
  const [firm, setFirm] = useState("Clifford chance");
  const handleYear = (event: any) => {
    setYear(event.target.value);
  };
  const handleCost = (event: any) => {
    setCost(event.target.value);
  };
  const handleAmount = (event: any) => {
    setAmount(event.target.value);
  };
  const handleFirm = (event: any) => {
    setFirm(event.target.value);
  };
  const Fields = [
    {
      value: year,
      handler: handleYear,
    },
  ];

  const Data = {
    years: ["2020", "2019", "2018", "2017"],
    costs: ["153", "47", "153", "32"],
    amounts: ["3 500$", "2 500$", "1 500$", "1 000$"],
    firms: ["Clifford chance", "Linklaters", "Opafity"],
  };

  return (
    <PanelWrapper>
      <Title>Amount of fees</Title>
      <FeesGrid>
        <Title>Year</Title>
        <Title>Cost center</Title>
        <Title>Total amount</Title>
        <Title>Law Firm</Title>
        <Formik enableReinitialize initialValues={Data} onSubmit={() => {}}>
          {({ values }) => (
            <>
              <StyledPlainSelect
                disabled={disable}
                value={year}
                labelId="label"
                id="select"
                onChange={handleYear}
              >
                {values.years.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={cost}
                labelId="label"
                id="select"
                onChange={handleCost}
              >
                {values.costs.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={amount}
                labelId="label"
                id="select"
                onChange={handleAmount}
              >
                {values.amounts.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={firm}
                labelId="label"
                id="select"
                onChange={handleFirm}
              >
                {values.firms.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={year}
                labelId="label"
                id="select"
                onChange={handleYear}
              >
                {values.years.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={cost}
                labelId="label"
                id="select"
                onChange={handleCost}
              >
                {values.costs.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={amount}
                labelId="label"
                id="select"
                onChange={handleAmount}
              >
                {values.amounts.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={firm}
                labelId="label"
                id="select"
                onChange={handleFirm}
              >
                {values.firms.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={year}
                labelId="label"
                id="select"
                onChange={handleYear}
              >
                {values.years.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={cost}
                labelId="label"
                id="select"
                onChange={handleCost}
              >
                {values.costs.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={amount}
                labelId="label"
                id="select"
                onChange={handleAmount}
              >
                {values.amounts.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
              <StyledPlainSelect
                disabled={disable}
                value={firm}
                labelId="label"
                id="select"
                onChange={handleFirm}
              >
                {values.firms.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </StyledPlainSelect>
            </>
          )}
        </Formik>
      </FeesGrid>
    </PanelWrapper>
  );
};
