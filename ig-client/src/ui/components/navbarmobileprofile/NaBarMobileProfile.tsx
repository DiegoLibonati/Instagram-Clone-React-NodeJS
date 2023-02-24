import { MdOutlineAddBox } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { UIContext } from "../../../contexts/UIContext";

export const NavBarMobileProfile = () => {
  const { user } = useContext(AuthContext);
  const { setMenuConfigOpen } = useContext(UIContext);

  return (
    <header className="lg:hidden fixed bg-white w-screen top-0 z-[9999999]">
      <nav className="flex items-center justify-between flex-row w-full p-2 h-14">
        <h2 className="font-bold text-lg">{user.username}</h2>

        <div className="flex items-center justify-between flex-row">
          <MdOutlineAddBox
            color="black"
            size={25}
            className="mx-2"
          ></MdOutlineAddBox>
          <RxHamburgerMenu
            color="black"
            size={25}
            onClick={setMenuConfigOpen}
          ></RxHamburgerMenu>
        </div>
      </nav>
    </header>
  );
};
