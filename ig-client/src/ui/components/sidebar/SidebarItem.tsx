import React from "react";

export const SidebarItem: React.FC<{
  children: React.ReactNode;
  text: string;
  direct?: () => void;
}> = ({ children, text, direct }) => {
  return (
    <li
      className="flex flex-row w-5/6 py-3 rounded-full px-2 h-auto items-center justify-start cursor-pointer hover:bg-gray-200"
      onClick={direct}
    >
      {children}
      <h2 className="text-black text-lg ml-2">{text}</h2>
    </li>
  );
};
