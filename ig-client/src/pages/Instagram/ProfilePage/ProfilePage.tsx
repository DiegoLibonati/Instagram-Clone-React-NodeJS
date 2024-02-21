import { useContext } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FooterMobile } from "../../../components/Footer/Mobile/FooterMobile";
import { ModalPublication } from "../../../components/Modal/ModalPublication/ModalPublication";
import { NavBarMobile } from "../../../components/NavBar/Mobile/NavBarMobile";
import { Profile } from "../../../components/Profile/Profile";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { useProfileUser } from "../../../hooks/useProfileUser";

export const ProfilePage = (): JSX.Element => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const uiContextStore = useContext(UIContext);
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
              onClick={() => uiContextStore?.setModalOpen("newpublication")}
            ></MdOutlineAddBox>
            <RxHamburgerMenu
              color="black"
              size={25}
              onClick={uiContextStore?.setMenuConfigOpen}
            ></RxHamburgerMenu>
          </div>
        </NavBarMobile>
      )}
      {matchMediaQuery && <Sidebar></Sidebar>}
      <Profile></Profile>
      {matchMediaQuery &&
        uiContextStore?.modal.isOpen &&
        uiContextStore?.modal.type === "publication" && (
          <ModalPublication></ModalPublication>
        )}
      {!matchMediaQuery && <FooterMobile></FooterMobile>}
    </>
  );
};
