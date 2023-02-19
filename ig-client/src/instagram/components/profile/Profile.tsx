import { ProfileActions } from "./ProfileActions";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileImages } from "./ProfileImages";

export const Profile = () => {
  return (
    <main className="flex items-start justify-start flex-col w-full h-full pt-14 lg:w-[80%] lg:absolute lg:right-0 lg:px-20 2xl:px-40 lg:pt-5 lg:items-center">
      <ProfileHeader></ProfileHeader>
      <ProfileActions></ProfileActions>
      <ProfileImages></ProfileImages>
    </main>
  );
};
