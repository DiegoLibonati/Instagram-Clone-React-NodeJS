import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ExploreContext } from "../../contexts/Explore/ExploreContext";
import { useProfileUser } from "../../hooks/useProfileUser";
import { NavBarMobile } from "../NavBar/Mobile/NavBarMobile";

export const PublicationsHeader = () => {
  const navigate = useNavigate();
  const { user } = useProfileUser();
  const { isOpenAnyImageFromExplore } = useContext(ExploreContext);

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
        onClick={() => {
          if (isOpenAnyImageFromExplore) return navigate("/search-page");

          return navigate(`/${user.username}`);
        }}
      ></BsArrowLeft>
      <h2 className="ml-5 font-medium text-lg">Publicaciones</h2>
    </NavBarMobile>
  );
};
