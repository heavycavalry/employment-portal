import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IRandomNumber } from "../../App";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import MenuLink from "./MenuLink";
import { Item } from "./MenuLink";
import { ItemText } from "./MenuLink";

const Menu = styled.ul`
  position: absolute;
  left: 0;
  background-color: white;
  margin-top: 8px;
  width: 30%;
  z-index: 2;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 70vh;
  &::-webkit-scrollbar {
    width: 10px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: calc(15px / 2);
    &:hover {
      background-color: black;
    }
  }
`;
const Title = styled.p`
  color: gray;
  font-size: 0.9em;
  margin-left: 2em;
  font-family: var(--Lato);
`;
const Input = styled.input`
  min-width: 90%;
  border-radius: 5px;
  padding: 0.3em;
  border: none;
  border: 1.5px solid var(--opacityGray);
  &::placeholder {
    color: var(--opacityGray);
  }
`;
const InputBox = styled.li`
  text-align: center;
  margin: 1em 0.5em;
`;
const Photo = styled.img`
  width: 3em;
  margin: 0 1em;
  border-radius: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const SeeProfileBtn = styled(Link)`
  font-size: 0.9em;
  font-weight: 600;
  color: var(--blue);
  margin-top: 0.2em;
`;
const LogoutBox = styled.div`
  display: flex;
  justify-content: center;
  color: grey;
  font-weight: 600;
  border-top: 2px solid var(--platinium);
  padding: 0.5em;
`;
const LogoutIcon = styled.img`
  margin-right: 0.5em;
`;

const DropdownMenu: FC<IRandomNumber> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <Menu>
      <InputBox>
      <Input
        type="text"
        placeholder="Filter..."
        onChange={(event) => {
          setSearchTerm(event?.target.value);
        }}
      />
    </InputBox>
      <MenuTitle title="Platform" />
      {"Home".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/house2.svg"}
          text="Home"
        />
      )}
      {"Publications".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/publications"
          icon={process.env.PUBLIC_URL + "/Icons/pub_dark.png"}
          text="Publications"
        />
      )}
      {"people".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/people.svg"}
          text="People"
        />
      )}
      {"entities".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/entities"
          icon={process.env.PUBLIC_URL + "/Icons/entities2.svg"}
          text="Entities"
        />
      )}
      {"administration".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/administration.svg"}
          text="Administration"
        />
      )}
      <MenuTitle title="Workspaces" />
      {"Client contract".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/house2.svg"}
          text="Client contract"
        />
      )}
      {"supplier contract".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/pub_dark.png"}
          text="Supplier contract"
        />
      )}
      {"corporate".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/entities.svg"}
          text="Corporate"
        />
      )}
      {"group norms".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/network.svg"}
          text="Group Norms"
        />
      )}
      {"real estate contracts"
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/administration.svg"}
          text="Real estate contracts"
        />
      )}
      <MenuTitle title="Account" />
      {"account".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <Account id={id} />
      )}
      {"privacy".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/privacy.svg"}
          text="Privacy"
        />
      )}
      {"settings".toLowerCase().includes(searchTerm.toLowerCase()) && (
        <MenuLink link="/home"
          icon={process.env.PUBLIC_URL + "/Icons/settings.svg"}
          text="Settings"
        />
      )}
      <LogOutLink />
    </Menu>
  );
};

const Account: FC<IRandomNumber> = ({ id }) => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));

  return (
    <Item>
      <ProfileImage id={id} />
      <Wrapper>
        <h2>{usersList[id]?.name}</h2>
        <SeeProfileBtn to="/profile">See profile</SeeProfileBtn>
      </Wrapper>
    </Item>
  );
};

const LogOutLink: FC = () => {
  return (
    <LogoutBox>
      <LogoutIcon src={process.env.PUBLIC_URL + "/Icons/logout.svg"} />
      <ItemText to="/home">Log out</ItemText>
    </LogoutBox>
  );
};

const ProfileImage: FC<IRandomNumber> = ({ id }) => {
  const { photosList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return <Photo src={photosList[id]?.url} alt="profile" />;
};

interface IMenuTitle {
  title: string;
}
const MenuTitle: FC<IMenuTitle> = (props) => {
  return (
    <li>
      <Title>{props.title}</Title>
    </li>
  );
};

export default DropdownMenu;
