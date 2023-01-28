import React from "react";

export const SidebarItem: React.FC<{
  children: React.ReactNode;
  text: string;
}> = ({ children, text }) => {
  return (
    <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
      {children}
      <h2 className="text-black text-lg ml-2">{text}</h2>
    </li>
  );
};
