import { createContext, useState } from "react";
import {
  ForeignUser,
  ProfileContextProps,
  ProfileContextT,
} from "../../types/types";

export const ProfileContext = createContext<ProfileContextT | null>(null);

export const ProfileProvider: React.FunctionComponent<ProfileContextProps> = ({
  children,
}) => {
  const [userForeignProfile, setUserForeignProfile] = useState<ForeignUser>({
    id: "",
    email: "",
    name: "",
    username: "",
    publications: [],
    followers: [],
    following: [],
    avatar: "",
    description: "",
  });

  return (
    <ProfileContext.Provider
      value={{ userForeignProfile, setUserForeignProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
