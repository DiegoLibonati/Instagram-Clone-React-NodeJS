import { useMediaMatch } from "../../hooks/useMediaMatch";
import { FooterMobile } from "../../ui/components/FooterMobile";
import { NavBarMobileProfile } from "../../ui/components/NavBarMobileProfile.tsx/NaBarMobileProfile";
import { Sidebar } from "../../ui/components/sidebar/Sidebar";
import { Profile } from "../components/profile/Profile";

export const ProfilePage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);

  return (
    <>
      {!matchMediaQuery && <NavBarMobileProfile></NavBarMobileProfile>}
      {matchMediaQuery && <Sidebar></Sidebar>}
      <Profile></Profile>

      {!matchMediaQuery && <FooterMobile></FooterMobile>}
    </>
  );
};
