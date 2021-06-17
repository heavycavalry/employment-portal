import React, { FC } from "react";
import { EntitiesActionButtons } from "./EntitiesActionButtons";
import { Filters } from "./Filters";
import { TopEntities } from "./TopEntities";
import {
  Container,
  EntitiesContainer,
  Item,
  Image,
  TextBox,
  CompanyName,
  Address,
} from "./Entities_styles";

export const Entities: FC = () => (
  <Container>
    <TopEntities />
    <EntitiesActionButtons />
    <Filters />
    <EntitiesTiles />
  </Container>
);
export const entitiesTileArray = [
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
    company: "World company SAS",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
  {
    photo:
      "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
    company: "Subsid Corp Ltd",
    address: "Caracas 1050, Distrito Capital, Venezuela",
  },
];

export const EntitiesTiles: FC = () => (
  <EntitiesContainer className="entities-container">
    {entitiesTileArray.map((value) => (
      <EntitiesTile
        photo={value.photo}
        company={value.company}
        address={value.address}
      />
    ))}
  </EntitiesContainer>
);

interface IEntitiesTile {
  photo: string;
  company: string;
  address: string;
}

const EntitiesTile: FC<IEntitiesTile> = (props) => {
  return (
    <Item className="entities-tile-box">
      <Image src={props.photo} alt="" />
      <TextBox>
        <CompanyName>{props.company}</CompanyName>
        <Address>{props.address}</Address>
      </TextBox>
    </Item>
  );
};
