import { useMediaMatch } from "../../hooks/useMediaMatch";
import { FooterMobile } from "../../ui/components/FooterMobile";
import { NavBarMobile } from "../../ui/components/NavBarMobile";
import { Sidebar } from "../../ui/components/sidebar/Sidebar";
import { Feed } from "../components/feed/Feed";
import { Suggetions } from "../components/suggestions/Suggetions";

export const HomePage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);

  return (
    <>
      <NavBarMobile></NavBarMobile>
      {matchMediaQuery && <Sidebar></Sidebar>}
      <main className="mt-[72px] mb-14 bg-black flex items-center justify-start flex-col w-100 h-auto lg:min-h-screen lg:m-0 lg:pt-8 lg:flex-row lg:w-[80%] lg:absolute lg:right-0 lg:justify-center lg:items-start">
        <Feed></Feed>

        {matchMediaQuery && <Suggetions></Suggetions>}
      </main>
      <FooterMobile></FooterMobile>
    </>
  );
};
