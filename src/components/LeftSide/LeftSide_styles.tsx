import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 3em;
  min-width: 20%;
  @media (max-width: 900px) {
  }
`;

//PROFILE
export const ProfileWrapper = styled.div`
  display: flex;
  margin-bottom: 2em;
  border-radius: 5px;
  background-color: white;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  @media (max-width: 900px) {
    border-right: 6px solid var(--blue);
    border-left: 6px solid var(--blue);
    width: 25em;
  }
`;

export const ProfileLink = styled(Link)`
  display: inline-block;
`;

//BOTTOM LINKS
export const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;
export const Icon = styled.img`
  height: 1.2em;
  width: 1.2em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const IconBox = styled.div`
  padding: 0.3em 0.4em 0.1em 0.4em;
  margin: 2px;
  border-radius: 2px;
  background: var(--blue);
  box-shadow: var(--btnShadow);
  transition: linear 0.2s;
  &:hover {
    background-color: var(--oxfordBlue);
    transition: linear 0.2s;
  }
`;
export const Text = styled(Link)`
  color: black;
  font-family: var(--Lato);
  transition: 0.3s;
  &:hover {
    color: var(--blue);
    transition: 0.3s;
  }
`;

//UNDERLINKS
export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.2em;
  align-items: center;
  cursor: pointer;
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UnderIcon = styled.img`
  width: 1.5em;
  margin: 0.2em 2em 0.2em 4em;
`;
export const HoverLink = styled(Link)`
  font-family: var(--Lato);
  color: var(--oxfordBlue);
  padding-left: 0.5em;
  border-left: 2px solid var(--blue);
  transition-property: border;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  &:hover {
    color: var(--blue);
    border-left: 5px solid var(--blue);
  }
`;
