import { FC } from "react";
import { Container, Icon, IconBox, Wrapper, Text } from "./LeftSide_styles";

const BottomProfileLink: FC = () => (
  <Wrapper>
    <LeftIcons />
    <LinkText />
    <RightIcons />
  </Wrapper>
);
const LeftIcons: FC = () => (
  <Container>
    <Icon
      src={process.env.PUBLIC_URL + "/Icons/people.svg"}
      alt="your network"
    />
    <Icon
      src={process.env.PUBLIC_URL + "/Icons/pub_light.png"}
      alt="your publications"
    />
  </Container>
);
const RightIcons: FC = () => (
  <Container>
    <ProfileBtn
      icon={process.env.PUBLIC_URL + "/Icons/user-plus.svg"}
      description="add new user"
    />
    <ProfileBtn
      icon={process.env.PUBLIC_URL + "/Icons/plus.svg"}
      description="add your new publication"
    />
  </Container>
);

interface IProfileBtn {
  icon: string;
  description: string;
}

const ProfileBtn: FC<IProfileBtn> = (props) => (
  <IconBox>
    <Icon src={props.icon} alt={props.description} />
  </IconBox>
);

const LinkText: FC = () => (
  <Container>
    <Text to="/network">Your Network</Text>
    <Text to="/publications">Your Publications</Text>
  </Container>
);

export default BottomProfileLink;
