import { useContext } from "react";
import { instagramApiLogout } from "../../api/Auth/instagramApiLogout";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { UIContext } from "../../contexts/Ui/UIContext";
import { MenuConfigDesktop } from "../MenuConfig/Desktop/MenuConfigDesktop";
import { SidebarNav } from "./SidebarNav";

export const Sidebar = (): JSX.Element => {
  const uiContextStore = useContext(UIContext);
  const authContextStore = useContext(AuthContext);

  return (
    <aside className="flex w-[20%] bg-white min-h-screen items-start justify-between border-r-[1px] border-gray-300 fixed left-0">
      {uiContextStore?.menuConfig.isOpen && (
        <MenuConfigDesktop className={"bottom-[5rem] lg:left-7 2xl:left-11 "}>
          <button
            className="text-md text-black p-2 rounded-md cursor-pointer w-full text-start hover:bg-gray-300"
            onClick={() => {
              authContextStore?.onLogout();
              uiContextStore?.setMenuConfigClose();
              instagramApiLogout();
            }}
          >
            Salir
          </button>
        </MenuConfigDesktop>
      )}
      <SidebarNav></SidebarNav>
    </aside>
  );
};
