import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineExplore } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../../contexts/UIContext";
import { SidebarItem } from "./SidebarItem";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { UserImage } from "../../../instagram/components/UserImage/UserImage";

export const SidebarItems = () => {
  const navigate = useNavigate();
  const { setModalOpen } = useContext(UIContext);
  const { user } = useContext(AuthContext);

  return (
    <ul className="flex flex-col items-start justify-center w-full h-auto pl-4">
      <SidebarItem text="Inicio" onClick={() => navigate("/")}>
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
      <SidebarItem text="Crear" onClick={() => setModalOpen("newpublication")}>
        <MdOutlineAddBox size={25} color="black"></MdOutlineAddBox>
      </SidebarItem>
      <SidebarItem text="Perfil" onClick={() => navigate(`/${user.username}`)}>
        <UserImage
          className="w-6 h-6 object-cover rounded-full"
          avatar={user.avatar}
          name={user.name}
        ></UserImage>
      </SidebarItem>
    </ul>
  );
};
