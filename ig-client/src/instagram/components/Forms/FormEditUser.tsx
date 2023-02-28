import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { instagramApiEditUser } from "../../../api/instagramApiEditUser";
import { AuthContext } from "../../../contexts/AuthContext";
import { UIContext } from "../../../contexts/UIContext";
import { useForm } from "../../../hooks/useForm";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { InputFile } from "../../../ui/components/Input/InputFile";
import { InputText } from "../../../ui/components/Input/InputText";
import { InputTextArea } from "../../../ui/components/Input/InputTextArea";
import { EditUserImage } from "../UserImage/EditUserImage";

export const FormEditUser = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const { user, onLogin } = useContext(AuthContext);
  const { setPreviewSrc, setAlertOpen } = useContext(UIContext);
  const navigate = useNavigate();

  const { formState, onInputChange } = useForm({
    avatar: user.avatar,
    name: user?.name,
    username: user.username,
    description: user.description,
    email: user.email,
  });

  const handleSendForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const request = await instagramApiEditUser(user.username, formState);

    if (request.hasOwnProperty("response")) {
      return setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }
    const payload = request.payload;
    const message = request.message;

    onLogin(payload);

    setAlertOpen("success", "¡Bien, todo esta ok!", message, "bg-green-600");
    setPreviewSrc("");
    navigate(`/${user.username}`);
  };

  return (
    <form
      className="flex items-center justify-start flex-col w-full h-auto px-2 lg:w-[80%] lg:absolute lg:right-0 lg:p-4"
      onSubmit={handleSendForm}
      encType="multipart/form-data"
    >
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
        name="avatar"
        onChange={onInputChange}
      ></InputFile>
      <InputText
        id="input-name"
        classNameLabel="mt-4 text-sm text-gray-500 w-full"
        placeholder="Nombre"
        classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2"
        name="name"
        value={formState.name}
        label="Nombre"
        onChange={onInputChange}
      ></InputText>

      <InputText
        id="input-username"
        classNameLabel="mt-4 text-sm text-gray-500 w-full"
        placeholder="Nombre de usuario"
        classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2"
        name="username"
        value={formState.username}
        label="Nombre de usuario"
        onChange={onInputChange}
      ></InputText>

      <InputText
        id="input-email"
        classNameLabel="mt-4 text-sm text-gray-500 w-full"
        placeholder="Correo electronico"
        classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2"
        name="email"
        value={formState.email}
        label="Correo electronico"
        onChange={onInputChange}
      ></InputText>

      <InputTextArea
        id="input-description"
        classNameLabel="mt-4 text-sm text-gray-500 w-full"
        classNameInput="w-full border-b-[1px] border-black text-md outline-none py-2 resize-none h-32"
        name="description"
        value={formState.description}
        label="Presentacion"
        placeholder="Presentacion"
        onChange={onInputChange}
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
  );
};
