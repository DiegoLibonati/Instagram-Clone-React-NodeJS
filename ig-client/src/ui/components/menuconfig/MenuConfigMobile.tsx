import { UIContext } from "../../../contexts/UIContext";
import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AuthContext } from "../../../contexts/AuthContext";
import { instagramApiLogout } from "../../../api/instagramApiLogout";

export const MenuConfigMobile = () => {
  const { menuConfig, setMenuConfigClose } = useContext(UIContext);
  const { onLogout } = useContext(AuthContext);

  return (
    <div
      className={`flex items-start justify-start flex-col bg-white w-screen h-screen fixed z-[999999999] overflow-x-hidden overflow-y-scroll transition transform ${
        menuConfig.isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <header className="flex flex-row items-center justify-start h-14 w-screen shadow-md">
        <nav className="flex flex-row items-center justify-start h-full w-full p-2">
          <BsArrowLeft
            color="black"
            size={25}
            onClick={setMenuConfigClose}
          ></BsArrowLeft>
          <h2 className="ml-5 font-medium text-lg">Configuración</h2>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-start w-full h-auto">
        <button
          className="p-2 text-red-600 w-full text-start mt-2"
          onClick={() => {
            onLogout();
            setMenuConfigClose();
            instagramApiLogout();
          }}
        >
          Salir
        </button>
      </div>
    </div>
  );
};
