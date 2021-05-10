import React, { FC } from "react";
import {
  SliderBoxItem,
  Image,
  TextBox,
  BigText,
  MediumText,
  SmallText,
} from "../../../styledComponents/Workspaces_styled";

interface ISliderItem {
  imageUrl: string;
  title: string;
  type: string;
  usersNumber: string;
}

export const SliderItem: FC<ISliderItem> = (props) => {
  return (
    <SliderBoxItem>
      <Image src={props.imageUrl} alt="" />
      <TextBox>
        <BigText>{props.title}</BigText>
        <div></div>
        <div>
          <MediumText>
            {props.type} • {props.usersNumber} users
          </MediumText>
        </div>
        <SmallText>Last update 2 days ago</SmallText>
      </TextBox>
    </SliderBoxItem>
  );
};
