import { FooterMobile } from "../../ui/components/FooterMobile";
import { NavBarMobile } from "../../ui/components/NavBarMobile";
import { Sidebar } from "../../ui/components/Sidebar";
import { Histories } from "../components/Histories";
import { Publication } from "../components/publication/Publication";

export const HomePage = () => {
  return (
    <>
      <NavBarMobile></NavBarMobile>
      <Sidebar></Sidebar>
      <main className="mt-mt-72px mb-14 bg-black flex items-center justify-start flex-col w-100 h-auto lg:m-0 lg:flex-row lg:w-[80%] min-h-screen lg:absolute lg:right-0 lg:justify-center lg:items-start">
        <section className="flex items-center justify-start flex-col w-full h-auto lg:w-2/6">
          <Histories></Histories>
          <Publication></Publication>
        </section>
      </main>

      <FooterMobile></FooterMobile>
    </>
  );
};
