export const MenuConfigDesktop = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-start justify-center w-2/3 h-auto bg-gray-200 absolute rounded-md z-[999999] ${className}`}
    >
      {children}
    </div>
  );
};
