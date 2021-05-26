import styled from "styled-components";
import { BtnRemoveStyles } from "./BtnRemoveStyles";

export const EditBtn = styled.button`
  ${BtnRemoveStyles}
  position: absolute;
  right: 20px;
  top: 20px;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  color: var(--blue);
  &:hover {
    color: var(--shadowBlue)
  }
`;

