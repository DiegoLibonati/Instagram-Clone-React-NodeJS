import { Link } from "react-router-dom";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import { FooterMobile } from "../../ui/components/FooterMobile";
import { Sidebar } from "../../ui/components/sidebar/Sidebar";

export const NotFoundPage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);

  return (
    <>
      {matchMediaQuery && <Sidebar></Sidebar>}

      <main className="flex flex-col items-center justify-center p-2 pt-4 lg:pt-10 lg:w-[80%] lg:absolute lg:right-0">
        <h2 className="font-bold text-2xl">Esta página no está disponible.</h2>
        <p className="mt-3 text-center">
          Es posible que el enlace que seleccionaste no funcione o que se haya
          eliminado la página.
          <Link to="/" className="font-medium">
            {" "}
            Volver a Instagram
          </Link>
          .
        </p>
      </main>

      {!matchMediaQuery && <FooterMobile></FooterMobile>}
    </>
  );
};
