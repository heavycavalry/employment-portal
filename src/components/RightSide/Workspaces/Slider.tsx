import React, { FC } from "react";
import {
  InnerSlider,
  MainSlider,
} from "../../../styledComponents/Workspaces_styled";
import { SliderItem } from "./SliderItem";

export const Slider: FC = () => {
  return (
    <MainSlider
      className="slider"
      onMouseMove={HandleMouseMove}
      onMouseDown={HandleScroll}
      onMouseUp={HandleDrop}
      onMouseEnter={HandleGrab}
    >
      <InnerSlider className="inner-slider">
        <SliderItem
          imageUrl="https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0"
          title="Client contract"
          type="Contract"
          usersNumber="54"
        />
        <SliderItem
          imageUrl="https://i.picsum.photos/id/948/200/200.jpg?hmac=h64Z3zl6jLB_DtaWe83fhSQY-r_Sum7pndIJrZZ9rtQ"
          title="Supplier contract"
          type="Contract"
          usersNumber="12"
        />
        <SliderItem
          imageUrl="https://i.picsum.photos/id/1048/200/200.jpg?hmac=W94UjOBeBuqxyKnyhht4a81ruXiXHpjQxvdZtNgGyow"
          title="Corporate"
          type="Corporate"
          usersNumber="25"
        />
        <SliderItem
          imageUrl="https://i.picsum.photos/id/160/200/200.jpg?hmac=0fql9ogVWlCf8ddvQCF-vGiiso9i0m0A68TP5De28tI"
          title="Group norms"
          type="Group norms"
          usersNumber="48"
        />
        <SliderItem
          imageUrl="https://i.picsum.photos/id/818/200/200.jpg?hmac=gfhJZngz3JDsSmE1obNFY5OeAQBVsJLED2VkwuGsC-o"
          title="Companies"
          type="Companies"
          usersNumber="11"
        />
      </InnerSlider>
    </MainSlider>
  );
};

let x: number;
let pressed: boolean = false;
let startx: number;

function getInnerSlider(): HTMLElement {
  return document.querySelector(".inner-slider") as HTMLElement;
}

function getSlider(): HTMLElement {
  return document.querySelector(".slider") as HTMLElement;
}

function HandleScroll(event: React.MouseEvent<HTMLElement>) {
  pressed = true;

  startx = event.nativeEvent.offsetX - getInnerSlider().offsetLeft;
  getSlider().style.cursor = "grabbing";
}
function HandleGrab() {
  getSlider().style.cursor = "grab";
}

function HandleDrop() {
  getSlider().style.cursor = "grab";
}
function HandleMouseMove(event: React.MouseEvent<HTMLElement>) {
  if (!pressed) return;
  console.dir(event.nativeEvent);
  event.preventDefault();
  x = event.nativeEvent.offsetX;
  getInnerSlider().style.left = `${x - startx}px`;
  CheckBoundary();
}
window.addEventListener("mouseup", () => {
  pressed = false;
});

function CheckBoundary() {
  let outer = getSlider().getBoundingClientRect();
  let inner = getInnerSlider().getBoundingClientRect();

  if (parseInt(getInnerSlider().style.left) > 0) {
    getInnerSlider().style.left = "0px";
  } else if (inner.right < outer.right) {
    getInnerSlider().style.left = `-${inner.width - outer.width}px`;
  }
}
