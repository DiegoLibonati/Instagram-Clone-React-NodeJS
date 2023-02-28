import { createContext, useEffect, useState } from "react";
import { instagramApiRenew } from "../api/instagramApiRenew";
import { User } from "../types/types";

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<null | any>(null);

export const AuthProvider: React.FunctionComponent<AuthContextProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    status: "checking",
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

  const onLogout = () => {
    setUser({
      status: "not-authenticated",
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
  };

  const onLogin = (payload: User) => {
    setUser({
      ...user,
      status: "authenticated",
      ...payload,
    });
  };

  const onChecking = () => {
    setUser({
      ...user,
      status: "checking",
    });
  };

  const checkAuthToken = async () => {
    setUser({ ...user, status: "checking" });
    const token = document.cookie?.split("=")[1];

    if (!token) return onLogout();

    try {
      const request = await instagramApiRenew();
      const userData = request.payload;

      if (request.hasOwnProperty("response")) {
        return onLogout();
      }

      setUser({
        ...userData,
        status: "authenticated",
      });
    } catch (error) {
      onLogout();
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, checkAuthToken, onLogout, onLogin, onChecking }}
    >
      {children}
    </AuthContext.Provider>
  );
};
