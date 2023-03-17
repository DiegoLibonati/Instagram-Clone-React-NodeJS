import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { NavBarMobile } from "../../../ui/components/NavBar/Mobile/NavBarMobile";
import { useProfileUser } from "../../hooks/useProfileUser";

export const PublicationsHeader = () => {
  const navigate = useNavigate();
  const { user } = useProfileUser();

  return (
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
        onClick={() => navigate(`/${user.username}`)}
      ></BsArrowLeft>
      <h2 className="ml-5 font-medium text-lg">Publicaciones</h2>
    </NavBarMobile>
  );
};
