import { ProfileActions } from "./ProfileActions";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileImages } from "./ProfileImages";
import { useState, useEffect, useContext } from "react";
import { User } from "../../../types/types";
import { instagramApiGetUser } from "../../../api/instagramApiGetUser";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

export const Profile = () => {
  const { id: urlUsername } = useParams();
  const { user } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState<User>({
    id: "",
    email: "",
    name: "",
    username: "",
    publications: [],
    followers: [],
    following: [],
  });

  const getProfileUser = async () => {
    const request = await instagramApiGetUser(urlUsername!);

    if (request.hasOwnProperty("response")) {
      return console.log(request.response.data.message);
    }

    const userData = request.payload;

    setUserProfile(userData);
  };

  useEffect(() => {
    console.log(urlUsername, user.username);
    if (urlUsername === user.username) {
      return setUserProfile(user);
    }

    getProfileUser();
  }, []);

  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);

  return (
    <main className="flex items-start justify-start flex-col w-full h-full pt-14 lg:w-[80%] lg:absolute lg:right-0 lg:px-20 2xl:px-40 lg:pt-5 lg:items-center">
      <ProfileHeader></ProfileHeader>
      <ProfileActions></ProfileActions>
      <ProfileImages></ProfileImages>
    </main>
  );
};
