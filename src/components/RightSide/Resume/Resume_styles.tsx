import styled from "styled-components";

export const TileTitle = styled.p`
color: var(--blue);
font-weight: bold;
font-size: 1.2rem;
&::first-letter {
  text-transform: uppercase;
}
`;
export const TileText = styled.p`
margin: 10px 0;
&::first-letter {
  text-transform: uppercase;
}
`;
export const TileBox = styled.div`
margin: 10px 0;
padding: 20px 30px;
background: white;
border-radius: 5px;
`;
export const InfoBox = styled.div`
display: flex;
justify-content: flex-start;
color: var(--mediumGray);
font-size: 0.82rem;
> * {
  margin: 0 5px;
}
> :first-child {
  margin-left: 0 !important;
}
> :nth-child(-n + 2) {
  &:after {
    content: "•";
    padding-left: 5px;
  }
}
`;