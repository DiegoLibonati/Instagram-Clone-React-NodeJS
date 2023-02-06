import { UIContext } from "../../contexts/UIContext";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import { FooterMobile } from "../../ui/components/FooterMobile";
import { NavBarMobileProfile } from "../../ui/components/NavBarMobileProfile.tsx/NaBarMobileProfile";
import { Sidebar } from "../../ui/components/sidebar/Sidebar";
import { CommentsDesktop } from "../components/feed/comments/commentsdesktop/CommentsDesktop";
import { Profile } from "../components/profile/Profile";
import { useContext } from "react";

export const ProfilePage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const { modal } = useContext(UIContext);

  return (
    <>
      {!matchMediaQuery && <NavBarMobileProfile></NavBarMobileProfile>}
      {matchMediaQuery && <Sidebar></Sidebar>}
      <Profile></Profile>
      {matchMediaQuery && modal.isOpen && <CommentsDesktop></CommentsDesktop>}
      {!matchMediaQuery && <FooterMobile></FooterMobile>}
    </>
  );
};
