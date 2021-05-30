import { InputLabel, Select } from "@material-ui/core";
import { Field } from "formik";
import styled from "styled-components"; 
import { BtnRemoveStyles } from "../../common/BtnRemoveStyles";
import { FlexColumn } from "../../common/FlexColumn";
import { FontAwesome } from "../../common/FontAwesome";
import { CommonWrapper } from "../../common/ProfilePageSectionWrapper";

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CommonContact = `
margin: 10px;
color: var(--blue);
font-size: 0.95rem;
position: relative;
transition: 0.3s;
&:hover:after {
  content:"";
  position: absolute;
  display: block;
  width: 100%;  
  border: 1px solid var(--blue);
}
`;
export const ContactLink = styled.a`
  ${CommonContact}
  &:nth-child(2) {
    &::before {
      ${FontAwesome}
      content: "\f15c";
    }
  }
  &:nth-child(3) {
    ${CommonContact}
    &::before {
      ${FontAwesome}
      content: "\f0b1";
    }
  }
`;
export const MessageLink = styled.a`
  ${CommonContact}
  &::before {
    ${FontAwesome}
    content: "\f0e0";
  }
`;
export const CloseBtn = styled.button`
  ${BtnRemoveStyles}
  margin-right: 20px;
  color: var(--blue);
`;
export const MainContainer = styled.div`
background-color: white;
max-width: 60em;
margin: 0px auto;
border-radius: 5px;
`;

export const FlexDiv = styled.div`
display: flex;
align-items: center;
`;

export const DataText = styled.p`
margin: 2px 5px;
&:first-child {
  font-weight: bolder;
}
`;


export const BorderBox = styled.div`
position: relative;
border: 2px solid var(--platinium);
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2px 10px;
margin-top: 10px;
transition: 0.5s;
cursor: pointer;
&:hover {
  background-color: var(--platinium);
}
`;


export const AddFile = styled.input`
margin-top: 10px;
&::-webkit-file-upload-button {
  visibility: hidden;
}
&::before {
  content: "Choose file";
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
&:hover::before {
  border-color: black;
}
&:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
`;


export const SmallImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin: 5px 10px;
`;

export const ProfileLink = styled.a`
${CommonContact}
&::before {
  ${FontAwesome}
  content: "\f406";
}
`;


export const Name = styled.p`
font-weight: bold;
color: var(--black);
margin: 10px;
`;


export const PanelWrapper = styled.div`
${CommonWrapper};
background: white;
flex-direction: column;
> :nth-child(2n) {
  margin-bottom: 20px;
}
`;


export const AtachmentBox = styled.div`
${FlexColumn}
> div::before {
  ${FontAwesome}
  content: "\f15b";
}
`;

export const StyledPlainSelect = styled(Select)`
color: black !important;
border-bottom: ${({ disabled }) =>
  disabled ? "none" : "1px solid var(--shadowBlue)"};
> svg {
  display: ${({ disabled }) => (disabled ? "none" : "block")};
}
&::before {
  border: none;
  display: ${({ disabled }) => (disabled ? "none" : "block")};
}
`;


export const GridTable = styled.div`
padding: 20px 0;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: auto;
grid-gap: 10px;
`;

export const GridTableReviews = styled.div`
padding: 20px 0;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 10px;

`


export const DateField = styled(Field)`
background: none;
border: ${({ disabled }) => (disabled ? "none" : "1px solid black")};
width: 150px;
border-radius: 5px;
border-color: var(--gray);
&::-webkit-calendar-picker-indicator {
}
`;

export const InfoWrapper = styled.div`
${CommonWrapper};
flex-direction: column;
position: relative;
`;

export const Title = styled(InputLabel)`
  color: var(--blue) !important;
  font-weight: bold !important;
  margin-bottom: 10px;
`;
export const TileBox = styled(Select)<{ disabled: boolean }>`
  > svg {
    display: ${({ disabled }) => (disabled ? "none" : "block")};
  }
  background-color: var(--shadowBlue);
  border-radius: 5px;
  width: fit-content;
  padding: 2px 5px;
  color: var(--blue) !important;
  font-weight: bold !important;
  margin: 0px 10px 20px 0;
  &:hover {
    border: none;
  }
`;

export const TableButton = styled.button`
/* ${BtnRemoveStyles} */
display: flex;
justify-content: flex-end;
`
export const FeesGrid = styled.div`
padding: 20px 0;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
`