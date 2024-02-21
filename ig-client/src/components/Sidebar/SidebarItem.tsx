import React from "react";

export const SidebarItem = ({
  children,
  text,
  className,
  onClick,
}: {
  children: React.ReactNode;
  text: string;
  className?: string;
  onClick?: () => void;
}): JSX.Element => {
  return (
    <li
      className={`flex flex-row relative w-5/6 py-3 rounded-full px-2 h-auto items-center justify-start cursor-pointer hover:bg-gray-200 ${className}`}
      onClick={onClick}
    >
      {children}
      <h2 className="text-black text-lg ml-2">{text}</h2>
    </li>
  );
};
