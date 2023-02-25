export const NavBarMobile = ({
  children,
  classNameHeader = "",
  classNameNav = "",
}: {
  children: React.ReactNode;
  classNameHeader?: string;
  classNameNav?: string;
}) => {
  return (
    <header className={classNameHeader}>
      <nav className={classNameNav}>{children}</nav>
    </header>
  );
};
