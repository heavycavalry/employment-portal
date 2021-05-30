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
            icon="\f2b5"
            title="Client Contract"
            description="I often say to prospective clients, 'Nothing will age faster than your hardware.' Even the thinnest touch screen will look like a toaster oven in a number of years. - Jake Barton"
            image={process.env.PUBLIC_URL + "/Images/contract.jpg"}
            id={id}
          />
        </Route>
        <Route path="/suppliercontract">
          <WorkspacesPage
            icon="\f2b5"
            title="Supplier Contract"
            description="More and more companies are reaching out to their suppliers and contractors to work jointly on issues of sustainability, environmental responsibility, ethics, and compliance. - Simon Mainwaring"
            image={process.env.PUBLIC_URL + "/Images/supplier.jpg"}
            id={id}
          />
        </Route>
        <Route path="/corporate">
          <WorkspacesPage
            icon="\f1ad"
            title="Corporate Holdings"
            description="Workspaces purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
            image={process.env.PUBLIC_URL + "/Images/corporate.jpg"}
            id={id}
          />
        </Route>
        <Route path="/groupnorms">
          <WorkspacesPage
            icon="\f0c0"
            title="Group Norms"
            description="As you navigate through the rest of your life, be open to collaboration. Other people and other people's ideas are often better than your own. Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life. - Amy Poehler"
            image={process.env.PUBLIC_URL + "/Images/norms.jpg"}
            id={id}
          />
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
      <Resume title="Resume your work" id={id} />
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
