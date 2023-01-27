import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-[20%] lg:bg-black lg:min-h-screen lg:items-start lg:justify-between lg:border-r-[1px] lg:border-white lg:fixed lg:left-0">
      <SidebarNav></SidebarNav>
    </aside>
  );
};
