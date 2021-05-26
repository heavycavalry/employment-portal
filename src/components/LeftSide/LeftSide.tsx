import { FC } from "react";
import { IRandomNumber } from "../../App";
import { MainWrapper } from "./LeftSide_styles";
import Profile from "./Profile";
import UnderProfileLinks from "./UnderProfileLinks";

export const LeftSide: FC<IRandomNumber> = ({ id }) => {
  return (
    <MainWrapper className="left-side">
      <Profile id={id} />
      <UnderProfileLinks />
    </MainWrapper>
  );
};

export default LeftSide;
