import React, { FC } from "react";
import { Corespondant } from "./Corespondants";
import { DataField } from "./PersonalDataSection";
import { IDisable } from "./ProfilePage";
import { AddFile, AtachmentBox, PanelWrapper, Title } from "./ProfilePage_styles";
import { Proposals } from "./Proposals";

export const PanelInformations: FC<IDisable> = ({ disable }) => (
    <>
      <PanelWrapper>
        <Title>Hourly free</Title>
        <DataField disabled={disable} name="fee" type="text"></DataField>
        <Title>Terms & Conditions</Title>
        <AtachmentBox>
          <DataField disabled={disable} name="terms" type="text"></DataField>
          <AddFile id="file" type="file"></AddFile>
        </AtachmentBox>
        <Title>Services & Projects</Title>
        <DataField disabled={disable} name="services" type="text"></DataField>
      </PanelWrapper>
      <PanelWrapper>
        <Corespondant
          image="https://thispersondoesnotexist.com/image"
          defaultName="Leanne Graham"
          disable={disable}
        />
        <Corespondant
          image="https://thispersondoesnotexist.com/image"
          defaultName="Ervin Howell"
          disable={disable}
        />
      </PanelWrapper>
      <PanelWrapper>
        <Proposals disable={disable} />
        </PanelWrapper>
    </>
  );
  