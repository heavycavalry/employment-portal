import React, { FC } from "react";
import { IDisable } from "./ProfilePage";
import { GridTableReviews, PanelWrapper, TableButton, Title } from "./ProfilePage_styles";
import {  IShowColumn, TableDataLine } from "./TableLineData";

export const InternalReviews: FC<IDisable & IShowColumn> = ({
    disable,
    show,
  }) => {
    return (
      <PanelWrapper>
        <Title>Internal reviews</Title>
        <GridTableReviews>
          <Title>Name</Title>
          <Title>Entity</Title>
          <Title>Location</Title>
          <Title>Expertise</Title>
          <Title>Date</Title>
          <TableDataLine
            show={show}
            name="Operation Time"
            entity="Renault Corsa"
            location="France"
            expertise="Tax"
            firm=""
            disable={disable}
          />
          <TableDataLine
            show={show}
            name="Op. Promethan"
            entity="Mazda"
            location="USA"
            expertise="M&A"
            firm=""
            disable={disable}
          />
          <TableDataLine
            show={show}
            name="Op. Promethan"
            entity="Mazda"
            location="USA"
            expertise="M&A"
            firm=""
            disable={disable}
          />
        </GridTableReviews>
        <TableButton>See more Reviews</TableButton>
      </PanelWrapper>
    );
  };
  