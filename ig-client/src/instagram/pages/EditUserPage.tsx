import { useContext, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { UIContext } from "../../contexts/UIContext";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import { FooterMobile } from "../../ui/components/Footer/Mobile/FooterMobile";
import { InputFile } from "../../ui/components/Input/InputFile";
import { InputText } from "../../ui/components/Input/InputText";
import { InputTextArea } from "../../ui/components/Input/InputTextArea";
import { NavBarMobile } from "../../ui/components/NavBar/Mobile/NavBarMobile";
import { Sidebar } from "../../ui/components/Sidebar/Sidebar";
import { EditUserImage } from "../components/UserImage/EditUserImage";

export const EditUserPage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const { user } = useContext(AuthContext);
  const { previewSrc, setPreviewSrc } = useContext(UIContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    avatar: previewSrc ? previewSrc : user.avatar,
    name: user.name,
    username: user.username,
    description: user.description,
    email: user.email,
  });

  return (
    <>
      {!matchMediaQuery && (
        <NavBarMobile
          classNameHeader={
            "flex flex-row items-center justify-start h-14 w-screen shadow-md mb-2"
          }
          classNameNav={
            "flex flex-row items-center justify-start h-full w-full p-2"
          }
        >
          <BsArrowLeft
            color="black"
            size={25}
            onClick={() => {
              navigate(`/${user.username}`);
              setPreviewSrc("");
            }}
          ></BsArrowLeft>
          <h2 className="ml-5 font-medium text-lg">Editar perfil</h2>
          <AiOutlineCheck
            size={25}
            color="blue"
            className="absolute right-2 cursor-pointer"
          ></AiOutlineCheck>
        </NavBarMobile>
      )}

      {matchMediaQuery && <Sidebar></Sidebar>}

      <form className="flex items-center justify-start flex-col w-full h-auto px-2 lg:w-[80%] lg:absolute lg:right-0 lg:p-4">
        {matchMediaQuery && (
          <BsArrowLeft
            color="blue"
            size={25}
            className="absolute left-2 cursor-pointer"
            onClick={() => {
              navigate(`/${user.username}`);
              setPreviewSrc("");
            }}
          ></BsArrowLeft>
        )}

        <EditUserImage className="w-16 h-16 rounded-full lg:w-40 lg:h-40"></EditUserImage>
        <InputFile
          classNameLabel="text-blue-500 mt-2 rounded-full cursor-pointer text-sm"
          label="Cambiar foto de perfil"
        ></InputFile>
        <InputText
          id="input-name"
          classNameLabel="mt-4 text-sm text-gray-500 w-full"
          placeholder="Nombre"
          classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2"
          name="name"
          value={form.name}
          label="Nombre"
        ></InputText>

        <InputText
          id="input-username"
          classNameLabel="mt-4 text-sm text-gray-500 w-full"
          placeholder="Nombre de usuario"
          classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2"
          name="username"
          value={form.username}
          label="Nombre de usuario"
        ></InputText>

        <InputText
          id="input-email"
          classNameLabel="mt-4 text-sm text-gray-500 w-full"
          placeholder="Correo electronico"
          classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2"
          name="email"
          value={form.email}
          label="Correo electronico"
        ></InputText>

        <InputTextArea
          id="input-description"
          classNameLabel="mt-4 text-sm text-gray-500 w-full"
          classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2 resize-none h-32"
          name="description"
          value={form.description}
          label="Presentacion"
          placeholder="Presentacion"
        ></InputTextArea>

        {matchMediaQuery && (
          <div className="self-start">
            <button className="p-1 bg-blue-400 text-white rounded-md w-20 mt-5 cursor-pointer">
              Enviar
            </button>
            <button className="ml-2 text-blue-400 cursor-pointer">
              Desactivar cuenta
            </button>
          </div>
        )}
      </form>

      {!matchMediaQuery && <FooterMobile></FooterMobile>}
    </>
  );
};
