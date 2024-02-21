import { useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FooterMobile } from "../../../components/Footer/Mobile/FooterMobile";
import { FormEditUser } from "../../../components/Forms/FormEditUser";
import { NavBarMobile } from "../../../components/NavBar/Mobile/NavBarMobile";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { useMediaMatch } from "../../../hooks/useMediaMatch";

export const EditUserPage = (): JSX.Element => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const authContextStore = useContext(AuthContext);
  const uiContextStore = useContext(UIContext);
  const navigate = useNavigate();

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
              navigate(`/${authContextStore?.user.username}`);
              uiContextStore?.setPreviewSrc("");
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

      <FormEditUser></FormEditUser>

      {!matchMediaQuery && <FooterMobile></FooterMobile>}
    </>
  );
};
