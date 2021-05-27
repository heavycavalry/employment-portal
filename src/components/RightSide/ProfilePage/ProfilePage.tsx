import { MenuItem } from "@material-ui/core";
import { Formik } from "formik";
import React, { FC, useState } from "react";
import { IRandomNumber } from "../../../App";
import { TopContactBtns } from "./ContactButtons";
import { Corespondant } from "./Corespondants";
import { DataField, PersonalDataSection } from "./PersonalDataSection";
import { AddFile, AtachmentBox, DateField, GridTable, MainContainer, PanelWrapper, StyledPlainSelect, Title } from "./ProfilePage_styles";
import { FormSection } from "./FormSection";


export const ProfilePage: FC<IRandomNumber> = ({ id }) => (
  <MainContainer>
    <TopContactBtns />
    <PersonalDataSection id={id} />
    <FormSection />
  </MainContainer>
);

export interface IDisable {
  disable: boolean;
}







