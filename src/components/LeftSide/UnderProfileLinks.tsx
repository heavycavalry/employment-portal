import React from "react";
import {
  HoverLink,
  LinkContainer,
  LinkWrapper,
  UnderIcon,
} from "./LeftSide_styles";

class UnderProfileLinks extends React.Component {
  render() {
    return (
      <LinkWrapper>
        <Publications />
        <Ecosystem />
        <Entities />
      </LinkWrapper>
    );
  }
}

class Publications extends React.Component {
  render() {
    return (
      <LinkContainer>
        <UnderIcon src={process.env.PUBLIC_URL + "/Icons/pub_dark.png"} />
        <HoverLink to="/publications">Publications</HoverLink>
      </LinkContainer>
    );
  }
}
class Ecosystem extends React.Component {
  render() {
    return (
      <LinkContainer>
        <UnderIcon src={process.env.PUBLIC_URL + "/Icons/ecosystem.svg"} />
        <HoverLink to="/ecosystem">Ecosystem</HoverLink>
      </LinkContainer>
    );
  }
}

class Entities extends React.Component {
  render() {
    return (
      <LinkContainer>
        <UnderIcon src={process.env.PUBLIC_URL + "/Icons/entities.svg"} />
        <HoverLink to="/entities">Entities</HoverLink>
      </LinkContainer>
    );
  }
}

export default UnderProfileLinks;
