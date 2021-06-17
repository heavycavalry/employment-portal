import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.9rem;
`;
export const EntitiesContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
`;
export const Item = styled.div`
  width: 280px;
  background-color: white;
  box-shadow: 1px 1px 5px 1px #8e8e8e;
  border-radius: 3px;
  display: flex;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 120px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const CompanyName = styled.h3`
  padding: 10px;
  font-size: 1.1rem;
  color: var(--darkGray);
`;
export const Address = styled.p`
  padding: 10px;
  color: var(--darkGray);
`;

export const WhiteContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  display: none;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 5px;
`;

export const AddBtn = styled.button`
  position: relative;
  background: none;
  color: var(--blue) !important;
  font-weight: bold;
  &::before {
    content: "\f067";
    position: absolute;
    left: -20px;
    top: 1px;
    color: var(--blue) !important;
  }
`;

export const ChooseBtn = styled.button`
  position: relative;
  background: none;
  color: var(--blue) !important;
  font-weight: bold;
  &::after {
    content: "\f107";
    position: absolute;
    right: -20px;
    top: 2px;
    color: var(--blue) !important;
  }
`;

export const Text = styled.p`
  color: var(--darkGray);
  font-weight: 600;
`;

export const XText = styled.p`
  font-weight: bold;
  color: var(--darkGray);
  position: relative;
  &::before {
    content: "\f00d";
    position: absolute;
    left: -15px;
    top: 1px;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
`;

export const DropText = styled.p`
  position: relative;
  &::after {
    content: "\f078";
    position: absolute;
    right: 15px;
    top: 1px;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
`;
export const Wrapper = styled.div`
  margin: 15px;
`;
export const Input = styled.input`
  margin-right: 10px;
  padding: 2px;
  border-radius: 5px;
  border: 2px solid var(--platinium);
`;

export const DropBtn = styled.button`
  &::before {
    padding: 0 10px;
    content: "\f192";
    padding-right: 10px;
  }
  &::after {
    content: "\f078";
    padding: 0 10px;
  }
`;
export const Dots = styled.button`
  background: transparent;
  border-right: 2px solid #b9b9b9;
  &::before {
    content: "\f141";
    padding: 0 10px;
  }
`;

export const Sort = styled.button`
  border: none;
  background: transparent;
  padding-right: 10px;
  border-right: 2px solid #b9b9b9;
  &::before {
    padding: 0 10px;
    content: "\f0dc";
  }
`;

export const Filtr = styled.button`
  padding-right: 10px;
  background: transparent;
  border-right: 2px solid #b9b9b9;
  &::before {
    padding: 0 10px;
    content: "\f0b0";
  }
`;

export const Expand = styled.button`
  border: none;
  background: transparent;
  border-right: 2px solid #b9b9b9;
  &::before {
    padding: 0 10px;
    content: "\f424";
  }
`;

export const Share = styled.button`
  border: none;
  background: transparent;
  &::before {
    padding: 0 5px 0 10px;
    content: "\f14d";
  }
`;

export const SpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BtnBox = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const MosaicBtn = styled.button`
  cursor: pointer;
  padding: 8px 5px;
  font-size: 0.8rem;
  border: none;
  &::before {
    padding: 2px 5px;
    font-family: "Font Awesome 5 Free";
    color: gray;
    font-weight: 900;
    content: "\f009";
    display: inline-block;
  }
`;
export const ListBtn = styled.button`
  padding: 5px;
  cursor: pointer;
  border: none;
  border-left: 2px solid #bebebe;
  &::before {
    padding: 2px 5px;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f03a";
    color: gray;
    display: inline-block;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  &::after {
    content: "\f013";
    padding: 10px;
    color: gray;
  }
`;
