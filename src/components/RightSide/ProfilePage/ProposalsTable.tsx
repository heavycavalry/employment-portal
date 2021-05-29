import { MenuItem } from "@material-ui/core";
import { Formik } from "formik";
import { FC, useState } from "react";
import { IDisable } from "./ProfilePage";
import {
  FeesGrid,
  GridTable,
  PanelWrapper,
  StyledPlainSelect,
  TableButton,
  Title,
} from "./ProfilePage_styles";
import { TableDataLine } from "./TableLineData";

export const Proposals: FC<IDisable> = ({ disable }) => {
  return (
    <PanelWrapper>
      <Title>Proposals</Title>
      <GridTable>
        <Title>Name</Title>
        <Title>Entity</Title>
        <Title>Location</Title>
        <Title>Expertise</Title>
        <Title>Date</Title>
        <Title>Firm</Title>
        <TableDataLine
          show=""
          name="Operation Time"
          entity="Renault Corsa"
          location="France"
          expertise="Tax"
          firm="Racine"
          disable={disable}
        />
        <TableDataLine
          show=""
          name="Op. Promethan"
          entity="Mazda"
          location="USA"
          expertise="M&A"
          firm="SVZ"
          disable={disable}
        />
        <TableDataLine
          show=""
          name="Op. Promethan"
          entity="Mazda"
          location="USA"
          expertise="M&A"
          firm="SVZ"
          disable={disable}
        />
      </GridTable>
      <TableButton>See more proposals</TableButton>
    </PanelWrapper>
  );
};

