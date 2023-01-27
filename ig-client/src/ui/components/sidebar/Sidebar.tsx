import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  return (
    <aside className="flex w-[20%] bg-black min-h-screen items-start justify-between border-r-[1px] border-white fixed left-0">
      <SidebarNav></SidebarNav>
    </aside>
  );
};
