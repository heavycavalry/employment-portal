import { FC } from "react";
import styles from "../../styles/LeftSide.module.css";
import BottomProfileLink from "./BottomProfileLink";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IRandomNumber } from "../../App";
import { ProfileLink, ProfileWrapper } from "./LeftSide_styles";

export const Profile: FC<IRandomNumber> = ({ id }) => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const { photosList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return (
    <ProfileWrapper>
      {ProfileInfo(
        photosList[id]?.url,
        usersList[id]?.name,
        "Software Developer"
      )}
      <BottomProfileLink />
    </ProfileWrapper>
  );
};

const ProfileInfo = (photo: string, name: string, job: string) => (
  <div className={styles.profileBox}>
    <img className={styles.profilePhoto} src={photo} alt="" />
    <ProfileLink to="/profile" className={styles.profileName}>
      {name}
    </ProfileLink>
    <p className={styles.profileJobTitle}>Job title - {job}</p>
  </div>
);

export default Profile;
