import { FooterMobile } from "../../ui/components/FooterMobile";
import { NavBarMobile } from "../../ui/components/NavBarMobile";
import { Sidebar } from "../../ui/components/sidebar/Sidebar";
import { Histories } from "../components/Histories";
import { Publication } from "../components/publication/Publication";
import { Suggetions } from "../components/suggestions/Suggetions";

export const HomePage = () => {
  return (
    <>
      <NavBarMobile></NavBarMobile>
      <Sidebar></Sidebar>
      <main className="mt-mt-72px mb-14 bg-black flex items-center justify-start flex-col w-100 h-auto lg:m-0 lg:pt-8 lg:flex-row lg:w-[80%] min-h-screen lg:absolute lg:right-0 lg:justify-center lg:items-start">
        <section className="flex items-center justify-start flex-col w-full h-auto lg:w-2/6 lg:mr-8">
          <Histories></Histories>
          <Publication></Publication>
        </section>

        <section className="hidden lg:flex lg:items-center lg:justify-start lg:flex-col lg:h-auto lg:w-[25%] lg:ml-8">
          <article className="flex items-center justify-start w-full h-16">
            <img
              className="w-14 h-14 object-cover rounded-full"
              src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
              alt="perfil"
            ></img>

            <div className="ml-4">
              <h2 className="text-white font-bold">die_libonati</h2>
              <h3 className="text-white">Diego Libonati</h3>
            </div>
          </article>

          <Suggetions></Suggetions>
        </section>
      </main>

      <FooterMobile></FooterMobile>
    </>
  );
};
