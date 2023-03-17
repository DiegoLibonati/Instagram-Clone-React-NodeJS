import { createContext, useState } from "react";

import { ForeignUser } from "../types/types";

interface ProfileContextProps {
  children: React.ReactNode;
}

export const ProfileContext = createContext<null | any>(null);

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
