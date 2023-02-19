import { MdOutlineAddBox } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBarMobileProfile = () => {
  return (
    <header className="lg:hidden fixed bg-white w-screen top-0 z-[9999999]">
      <nav className="flex items-center justify-between flex-row w-full p-2 h-14">
        <h2 className="font-bold text-lg">die_libonati</h2>

        <div className="flex items-center justify-between flex-row">
          <MdOutlineAddBox
            color="black"
            size={25}
            className="mx-2"
          ></MdOutlineAddBox>
          <RxHamburgerMenu color="black" size={25}></RxHamburgerMenu>
        </div>
      </nav>
    </header>
  );
};
