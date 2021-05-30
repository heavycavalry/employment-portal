import React, { FC } from "react";
import styled from "styled-components";
import Publications from "./Publications/Publications";
import { Switch, Route } from "react-router-dom";
import { Entities } from "../RightSide/Entities/Entities";
import { Workspaces, WorkspacesPage } from "./Workspaces/Workspaces";
import { Resume } from "./Resume/Resume";
import { IRandomNumber } from "../../App";
import { ProfilePage } from "./ProfilePage/ProfilePage";

const Wrapper = styled.div`
  margin: 3em 2em;
  width: 100%;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

const RightSide: FC<IRandomNumber> = ({ id }) => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/publications">
          <PublicationsPage id={id} />
        </Route>
        <Route path="/ecosystem">
          <Ecosystem />
        </Route>
        <Route path="/entities">
          <Entities />
        </Route>
        <Route path="/profile">
          <ProfilePage id={id} />
        </Route>
        <Route path="/network">
          <Network />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/administration">
          <Administration />
        </Route>
        <Route path="/clientcontract">
        <WorkspacesPage
            title="Client Contract"
            description="Workspaces purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
            image={process.env.PUBLIC_URL + "/Images/contract.jpg"}
            id={id}
          />
        </Route>
        <Route path="/suppliercontract">
          <SupplierContact />
        </Route>
        <Route path="/corporate">
          <WorkspacesPage
            title="Corporate Holdings"
            description="Workspaces purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
            image={process.env.PUBLIC_URL + "/Images/corporate.jpg"}
            id={id}
          />
        </Route>
        <Route path="/groupnorms">
          <GroupNorms />
        </Route>
        <Route path="/realestatecontract">
          <RealEstateContracts />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <PublicationsPage id={id} />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const PublicationsPage: FC<IRandomNumber> = ({ id }) => {
  return (
    <>
      <Publications id={id} />
      <Workspaces />
      <Resume id={id} />
    </>
  );
};

const Ecosystem = () => {
  return <h1>ECOSYSTEM</h1>;
};
const Network = () => {
  return <h1>NETWORK</h1>;
};
const People = () => {
  return <h1>People</h1>;
};
const Administration = () => {
  return <h1>ADMINISTRATION</h1>;
};
const SupplierContact = () => {
  return <h1>SUPPLIER CONTACT</h1>; //TODO
};
const GroupNorms = () => {
  return <h1>GROUP NORMS</h1>; //TODO
};
const RealEstateContracts = () => {
  return <h1>RealEstateContracts</h1>;
};
const Privacy = () => {
  return <h1>Privacy</h1>;
};
const Settings = () => {
  return <h1>Settings</h1>;
};

export default RightSide;
