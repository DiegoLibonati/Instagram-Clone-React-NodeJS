import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { Histories } from "../feed/histories/Histories";
import { ProfileHeaderActions } from "./ProfileHeaderActions";
import { ProfileHeaderDescription } from "./ProfileHeaderDescription";
import { ProfileHeaderDescriptionDesktop } from "./ProfileHeaderDescriptionDesktop";
import { ProfileHeaderNumbers } from "./ProfileHeaderNumbers";

export const ProfileHeader = () => {
  const { matchMediaQuery } = useMediaMatch(1024);

  return (
    <section className="flex items-center justify-center flex-col w-full h-auto p-2">
      {!matchMediaQuery && <ProfileHeaderNumbers></ProfileHeaderNumbers>}

      {!matchMediaQuery && (
        <ProfileHeaderDescription></ProfileHeaderDescription>
      )}

      {!matchMediaQuery && <ProfileHeaderActions></ProfileHeaderActions>}

      {matchMediaQuery && (
        <ProfileHeaderDescriptionDesktop></ProfileHeaderDescriptionDesktop>
      )}

      <Histories className="mb-5 mt-10 2xl:w-[75%]"></Histories>
    </section>
  );
};
