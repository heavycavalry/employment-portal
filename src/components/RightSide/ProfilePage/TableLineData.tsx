import { MenuItem } from "@material-ui/core";
import { Formik } from "formik";
import React, { FC, useState } from "react";
import { IDisable } from "./ProfilePage";
import { DateField, StyledPlainSelect } from "./ProfilePage_styles";

export interface ITableLineData {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    firm?: string;
  }

export interface IShowColumn{
    show: string;
  }
  

export const TableDataLine: FC<IDisable & ITableLineData & IShowColumn> = ({
    show,
    disable,
    name,
    entity,
    location,
    expertise,
    firm,
  }) => {
    const [nameValue, setName] = useState(name);
    const [entityValue, setEntity] = useState(entity);
    const [locationValue, setLocation] = useState(location);
    const [expertiseValue, setExpertise] = useState(expertise);
    const [firmValue, setFirm] = useState(firm);
    const [startDate, setStartDate] = useState();
  
    const handleDate = (event: any) => {
      setStartDate(event.target.value);
    };
    const handleName = (event: any) => {
      setName(event.target.value);
    };
    const handleEntity = (event: any) => {
      setEntity(event.target.value);
    };
    const handleLocation = (event: any) => {
      setLocation(event.target.value);
    };
    const handleExpertise = (event: any) => {
      setExpertise(event.target.value);
    };
    const handleFirm = (event: any) => {
      setFirm(event.target.value);
    };
  
    return (
      <Formik
        enableReinitialize
        initialValues={{
          names: [
            "Operation Time",
            "Op. Promethan",
            "Op. Latandre",
            "Absolute Awesome",
          ],
          entities: ["Renault Corsa", "Mazda", "Sedan", "Fiat Costam"],
          locations: ["France", "USA", "Italia", "Rumunia"],
          expertises: ["Tax", "M&A", "Social", "A&B"],
          firms: ["Racine", "Clifford chance", "SVZ"],
        }}
        onSubmit={() => {}}
      >
        {({ values }) => (
          <>
            <StyledPlainSelect
              disabled={disable}
              value={nameValue}
              labelId="label"
              id="select"
              onChange={handleName}
            >
              {values.names.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </StyledPlainSelect>
            <StyledPlainSelect
              disabled={disable}
              value={entityValue}
              labelId="label"
              id="select"
              onChange={handleEntity}
            >
              {values.entities.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </StyledPlainSelect>
            <StyledPlainSelect
              disabled={disable}
              value={locationValue}
              labelId="label"
              id="select"
              onChange={handleLocation}
            >
              {values.locations.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </StyledPlainSelect>
            <StyledPlainSelect
              disabled={disable}
              value={expertiseValue}
              labelId="label"
              id="select"
              onChange={handleExpertise}
            >
              {values.expertises.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </StyledPlainSelect>
            <DateField
              disabled={disable}
              value={startDate}
              onChange={handleDate}
              type="date"
            />
            <StyledPlainSelect
              className={show}
              disabled={disable}
              value={firmValue}
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
    );
  };
  