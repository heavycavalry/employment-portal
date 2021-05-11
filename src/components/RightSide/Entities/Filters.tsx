import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 5px;
`;

const AddBtn = styled.button`
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

const ChooseBtn = styled.button`
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

const Text = styled.p`
color: var(--darkGray);
font-weight: 600;
`;

const XText = styled.p`
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

const DropText = styled.p`
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
const Wrapper = styled.div`
margin: 15px;
`;
const Input = styled.input`
  margin-right: 10px;
  padding: 2px;
  border-radius: 5px;
 border: 2px solid var(--platinium);
`;

export const Filters: FC = () => (
  <Container className="filters">
    <Text>Rows are filtered by the following conditions starting from the top</Text>
    <FilterLine />
    <Buttons />
  </Container>
);

export const FilterLine: FC = () => (
  <Wrapper>
    <FlexWrapper>
      <XText>Where</XText>
      <DropText>Company</DropText>
      <InputFragment text="Contains" placeholder="Type..." />
    </FlexWrapper>
    <FlexWrapper>
      <XText>Where</XText>
      <DropText>Status</DropText>
      <InputFragment text="Is" placeholder="Type..." />
      <InputFragment text="In" placeholder="Entitie..." />
    </FlexWrapper>
    <FlexWrapper>
      <XText>And</XText>
      <DropText>Status</DropText>
      <InputFragment text="Ends before" placeholder="Date..." />
      <InputFragment text="In" placeholder="Entitie..." />
    </FlexWrapper>
  </Wrapper>
);

interface IInputInfo {
  text: string;
  placeholder: string;
}

const InputFragment: FC<IInputInfo> = (props) => (
  <>
    <DropText>{props.text}</DropText>
    <Input type="text" placeholder={props.placeholder} />
  </>
);

export const Buttons: FC = () => (
  <BtnWrapper>
    <AddBtn>Add filter</AddBtn>
    <ChooseBtn>Choose property</ChooseBtn>
  </BtnWrapper>
);
