import { SidebarHeader } from "./SidebarHeader";
import { SidebarItems } from "./SidebarItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarItem } from "./SidebarItem";

export const SidebarNav = () => {
  return (
    <nav className="flex items-start justify-start h-screen w-full flex-col relative">
      <SidebarHeader></SidebarHeader>

      <SidebarItems></SidebarItems>

      <div className="flex flex-row w-100 h-auto items-center justify-start absolute bottom-6 pl-6">
        <SidebarItem text="Mas">
          <GiHamburgerMenu size={25} color="white"></GiHamburgerMenu>
        </SidebarItem>
      </div>
    </nav>
  );
};
