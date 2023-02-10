import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineExplore } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";

export const SidebarItems = () => {
  const navigate = useNavigate();

  return (
    <ul className="flex flex-col items-start justify-center w-full h-auto pl-6">
      <SidebarItem text="Inicio" direct={() => navigate("/")}>
        <AiOutlineHome size={25} color="black"></AiOutlineHome>
      </SidebarItem>
      <SidebarItem text="Buscar">
        <BsSearch size={25} color="black"></BsSearch>
      </SidebarItem>
      <SidebarItem text="Explorar">
        <MdOutlineExplore size={25} color="black"></MdOutlineExplore>
      </SidebarItem>
      <SidebarItem text="Reels">
        <RxVideo size={25} color="black"></RxVideo>
      </SidebarItem>
      <SidebarItem text="Mensajes">
        <AiOutlineMessage size={25} color="black"></AiOutlineMessage>
      </SidebarItem>
      <SidebarItem text="Notificaciones">
        <BsSuitHeart size={25} color="black"></BsSuitHeart>
      </SidebarItem>
      <SidebarItem text="Crear">
        <MdOutlineAddBox size={25} color="black"></MdOutlineAddBox>
      </SidebarItem>
      <SidebarItem text="Perfil" direct={() => navigate("/die_libonati")}>
        <img
          className="w-6 h-6 object-cover rounded-full"
          src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
          alt="perfil"
        ></img>
      </SidebarItem>
    </ul>
  );
};
