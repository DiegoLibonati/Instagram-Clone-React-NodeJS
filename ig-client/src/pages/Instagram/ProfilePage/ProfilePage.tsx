import { useContext } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CommentsDesktop } from "../../../components/Comments/Desktop/CommentsDesktop";
import { FooterMobile } from "../../../components/Footer/Mobile/FooterMobile";
import { NavBarMobile } from "../../../components/NavBar/Mobile/NavBarMobile";
import { Profile } from "../../../components/Profile/Profile";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { useProfileUser } from "../../../hooks/useProfileUser";

export const ProfilePage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const { modal, setMenuConfigOpen, setModalOpen } = useContext(UIContext);
  const { user } = useProfileUser();

  return (
    <>
      {!matchMediaQuery && (
        <NavBarMobile
          classNameHeader={
            "lg:hidden fixed bg-white w-screen top-0 z-[9999999]"
          }
          classNameNav={
            "flex items-center justify-between flex-row w-full p-2 h-14"
          }
        >
          <h2 className="font-bold text-lg">{user.username}</h2>

          <div className="flex items-center justify-between flex-row">
            <MdOutlineAddBox
              color="black"
              size={25}
              className="mx-2"
              onClick={() => setModalOpen("newpublication")}
            ></MdOutlineAddBox>
            <RxHamburgerMenu
              color="black"
              size={25}
              onClick={setMenuConfigOpen}
            ></RxHamburgerMenu>
          </div>
        </NavBarMobile>
      )}
      {matchMediaQuery && <Sidebar></Sidebar>}
      <Profile></Profile>
      {matchMediaQuery && modal.isOpen && modal.type === "publication" && (
        <CommentsDesktop></CommentsDesktop>
      )}
      {!matchMediaQuery && <FooterMobile></FooterMobile>}
    </>
  );
};
