import { createContext, useState } from "react";

import { User } from "../types/types";

interface ProfileContextProps {
  children: React.ReactNode;
}

export const ProfileContext = createContext<null | any>(null);

export const ProfileProvider: React.FunctionComponent<ProfileContextProps> = ({
  children,
}) => {
  const [userProfile, setUserProfile] = useState<User>({
    id: "",
    email: "",
    name: "",
    username: "",
    publications: [],
    followers: [],
    following: [],
  });

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
