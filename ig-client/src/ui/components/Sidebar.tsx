import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineExplore } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { InstagramWhite } from "../../assets/images";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-[20%] lg:bg-black lg:min-h-screen lg:items-start lg:justify-between lg:h-full border-r-[1px] border-white fixed left-0">
      <nav className="flex items-start justify-start h-screen w-full flex-col relative">
        <div className="flex items-center justify-start w-full h-40 pl-6">
          <img
            className="w-28 h-auto object-cover"
            src={InstagramWhite}
            alt="instagram"
          ></img>
        </div>

        <ul className="flex flex-col items-start justify-center w-full h-auto pl-6">
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <AiOutlineHome size={25} color="white"></AiOutlineHome>
            <h2 className="text-white text-lg ml-2">Inicio</h2>
          </li>
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <BsSearch size={25} color="white"></BsSearch>
            <h2 className="text-white text-lg ml-2">Buscar</h2>
          </li>
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <MdOutlineExplore size={25} color="white"></MdOutlineExplore>
            <h2 className="text-white text-lg ml-2">Explorar</h2>
          </li>
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <RxVideo size={25} color="white"></RxVideo>
            <h2 className="text-white text-lg ml-2">Reels</h2>
          </li>
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <AiOutlineMessage size={25} color="white"></AiOutlineMessage>
            <h2 className="text-white text-lg ml-2">Mensajes</h2>
          </li>
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <BsSuitHeart size={25} color="white"></BsSuitHeart>
            <h2 className="text-white text-lg ml-2">Notificaciones</h2>
          </li>
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <MdOutlineAddBox size={25} color="white"></MdOutlineAddBox>
            <h2 className="text-white text-lg ml-2">Crear</h2>
          </li>
          <li className="flex flex-row w-100 h-auto items-center justify-start my-3">
            <Link to="/">
              <img
                className="w-6 h-6 object-cover rounded-full"
                src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
                alt="perfil"
              ></img>
            </Link>
            <h2 className="text-white text-lg ml-2">Perfil</h2>
          </li>
        </ul>

        <div className="flex flex-row w-100 h-auto items-center justify-start absolute bottom-6 pl-6">
          <GiHamburgerMenu size={25} color="white"></GiHamburgerMenu>
          <h2 className="text-white text-lg ml-2">Mas</h2>
        </div>
      </nav>
    </aside>
  );
};
