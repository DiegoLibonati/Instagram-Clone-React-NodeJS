import { FooterMobile } from "../../ui/components/FooterMobile";
import { NavBarMobile } from "../../ui/components/NavBarMobile";
import { Histories } from "../components/Histories";
import { SlOptionsVertical } from "react-icons/sl";
import { BsSuitHeart, BsChat, BsArchive } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

export const HomePage = () => {
  return (
    <>
      <NavBarMobile></NavBarMobile>

      <main className="mt-mt-72px mb-14 bg-black flex items-start justify-center flex-col w-100 h-auto">
        <Histories></Histories>
        <section className="flex items-center justify-start flex-col w-full h-auto">
          <article className="flex items-start justify-center flex-col w-full h-auto">
            <div className="flex items-center justify-between p-2 w-full h-auto">
              <div className="flex items-center justify-between w-8 h-auto">
                <img
                  src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
                  alt="perfil"
                  className="rounded-full mr-2"
                ></img>
                <h3 className="text-white">die_libonati</h3>
              </div>

              <SlOptionsVertical color="white" size={25}></SlOptionsVertical>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2021/04/13/23/25/paisaje-6176882_1280.jpg"
              alt="paisaje"
              className="w-full h-auto object-cover"
            ></img>
            <div className="flex items-center justify-between w-full p-2 h-auto">
              <div className="flex items-center justify-between h-auto">
                <BsSuitHeart
                  color="white"
                  size={25}
                  className="mr-4"
                ></BsSuitHeart>
                <BsChat color="white" size={25} className="mr-4"></BsChat>
                <FiSend color="white" size={25} className="mr-4"></FiSend>
              </div>
              <BsArchive color="white" size={25}></BsArchive>
            </div>
            <div className="flex items-start justify-center flex-col w-full p-2">
              <h3 className="text-white text-sm font-medium">65 Me gusta</h3>
              <h4 className="text-white text-base">
                <span className="font-medium">die_libonati</span> A vivir que
                son dias
              </h4>
              <button className="text-gray-400 text-sm">
                ver los 7 comentarios
              </button>
            </div>
            <div className="flex items-center justify-start w-full h-auto px-2">
              <img
                src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
                alt="perfil"
                className="rounded-full mr-2 w-8"
              ></img>
              <input
                placeholder="Agrega un comentario..."
                className="bg-transparent border-none outline-none text-white"
              ></input>
            </div>
            <h5 className="text-gray-400 text-sm w-100 p-2">Hace 22 horas</h5>
          </article>{" "}
          <article className="flex items-start justify-center flex-col w-full h-auto">
            <div className="flex items-center justify-between p-2 w-full h-auto">
              <div className="flex items-center justify-between w-8 h-auto">
                <img
                  src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
                  alt="perfil"
                  className="rounded-full mr-2"
                ></img>
                <h3 className="text-white">die_libonati</h3>
              </div>

              <SlOptionsVertical color="white" size={25}></SlOptionsVertical>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2021/04/13/23/25/paisaje-6176882_1280.jpg"
              alt="paisaje"
              className="w-full h-auto object-cover"
            ></img>
            <div className="flex items-center justify-between w-full p-2 h-auto">
              <div className="flex items-center justify-between h-auto">
                <BsSuitHeart
                  color="white"
                  size={25}
                  className="mr-4"
                ></BsSuitHeart>
                <BsChat color="white" size={25} className="mr-4"></BsChat>
                <FiSend color="white" size={25} className="mr-4"></FiSend>
              </div>
              <BsArchive color="white" size={25}></BsArchive>
            </div>
            <div className="flex items-start justify-center flex-col w-full p-2">
              <h3 className="text-white text-sm font-medium">65 Me gusta</h3>
              <h4 className="text-white text-base">
                <span className="font-medium">die_libonati</span> A vivir que
                son dias
              </h4>
              <button className="text-gray-400 text-sm">
                ver los 7 comentarios
              </button>
            </div>
            <div className="flex items-center justify-start w-full h-auto px-2">
              <img
                src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
                alt="perfil"
                className="rounded-full mr-2 w-8"
              ></img>
              <input
                placeholder="Agrega un comentario..."
                className="bg-transparent border-none outline-none text-white"
              ></input>
            </div>
            <h5 className="text-gray-400 text-sm w-100 p-2">Hace 22 horas</h5>
          </article>
        </section>
      </main>

      <FooterMobile></FooterMobile>
    </>
  );
};
