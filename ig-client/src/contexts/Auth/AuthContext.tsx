import { createContext, useState } from "react";
import { instagramApiRenew } from "../../api/Auth/instagramApiRenew";
import { AuthContextProps, AuthContextT, User } from "../../types/types";

export const AuthContext = createContext<AuthContextT | null>(null);

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
    recentUsers: [],
    notifications: [],
  });

  const onLogout = (): void => {
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
      recentUsers: [],
      notifications: [],
    });
  };

  const onLogin = (payload: User): void => {
    setUser({
      ...user,
      status: "authenticated",
      ...payload,
    });
  };

  const onChecking = (): void => {
    setUser({
      ...user,
      status: "checking",
    });
  };

  const checkAuthToken = async (): Promise<void> => {
    setUser({ ...user, status: "checking" });
    const token = document.cookie?.split("=")[1];

    if (!token) return onLogout();

    try {
      const request = await instagramApiRenew();
      const userData = request.payload;

      if (request.hasOwnProperty("response")) {
        console.log("Token Invalido");
        onLogout();
        return;
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
