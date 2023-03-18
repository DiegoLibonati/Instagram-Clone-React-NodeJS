import { SuggetionProfile } from "./SuggetionProfile";
import { SuggetionsProfilesHeader } from "./SuggetionsProfilesHeader";

export const SuggetionsProfiles = () => {
  return (
    <article className="flex items-center justify-start flex-col w-full h-auto">
      <SuggetionsProfilesHeader></SuggetionsProfilesHeader>

      <ul className="flex items-center justisfy-start flex-col w-full h-auto">
        <SuggetionProfile></SuggetionProfile>
        <SuggetionProfile></SuggetionProfile>
        <SuggetionProfile></SuggetionProfile>
        <SuggetionProfile></SuggetionProfile>
        <SuggetionProfile></SuggetionProfile>
      </ul>
    </article>
  );
};
