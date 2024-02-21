export const NavBarMobile = ({
  children,
  classNameHeader = "",
  classNameNav = "",
}: {
  children: React.ReactNode;
  classNameHeader?: string;
  classNameNav?: string;
}): JSX.Element => {
  return (
    <header className={classNameHeader}>
      <nav className={classNameNav}>{children}</nav>
    </header>
  );
};
