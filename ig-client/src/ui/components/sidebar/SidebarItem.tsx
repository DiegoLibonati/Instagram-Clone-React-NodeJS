import React from "react";

export const SidebarItem: React.FC<{
  children: React.ReactNode;
  text: string;
  direct?: () => void;
}> = ({ children, text, direct }) => {
  return (
    <li
      className="flex flex-row w-100 h-auto items-center justify-start my-3 cursor-pointer"
      onClick={direct}
    >
      {children}
      <h2 className="text-black text-lg ml-2">{text}</h2>
    </li>
  );
};
