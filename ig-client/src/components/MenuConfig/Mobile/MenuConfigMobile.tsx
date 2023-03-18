import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { SliderFullScreen } from "../../SliderFullScreen/SliderFullScreen";
import { NavBarMobile } from "../../NavBar/Mobile/NavBarMobile";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { instagramApiLogout } from "../../../api/Auth/instagramApiLogout";

export const MenuConfigMobile = () => {
  const { menuConfig, setMenuConfigClose } = useContext(UIContext);
  const { onLogout } = useContext(AuthContext);

  return (
    <SliderFullScreen isTrue={menuConfig.isOpen}>
      <NavBarMobile
        classNameHeader={
          "flex flex-row items-center justify-start h-14 w-screen shadow-md"
        }
        classNameNav={
          "flex flex-row items-center justify-start h-full w-full p-2"
        }
      >
        <BsArrowLeft
          color="black"
          size={25}
          onClick={setMenuConfigClose}
        ></BsArrowLeft>
        <h2 className="ml-5 font-medium text-lg">Configuración</h2>
      </NavBarMobile>

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
    </SliderFullScreen>
  );
};
