import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const PublicationsHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-row items-center justify-start h-14 w-screen shadow-md mb-2">
      <nav className="flex flex-row items-center justify-start h-full w-full p-2">
        <BsArrowLeft
          color="black"
          size={25}
          onClick={() => navigate("/die_libonati")}
        ></BsArrowLeft>
        <h2 className="ml-5 font-medium text-lg">Publicaciones</h2>
      </nav>
    </header>
  );
};
