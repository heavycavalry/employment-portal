import React, { FC } from "react";
import styled from "styled-components";
import { WhiteContainer, Text, FlexWrapper, Wrapper, DropText, XText, Input, BtnWrapper, AddBtn, ChooseBtn } from './Entities_styles'

export const Filters: FC = () => (
  <WhiteContainer className="filters">
    <Text>Rows are filtered by the following conditions starting from the top</Text>
    <FilterLine />
    <Buttons />
  </WhiteContainer>
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
