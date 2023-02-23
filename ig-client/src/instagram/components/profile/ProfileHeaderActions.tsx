import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

export const ProfileHeaderActions = () => {
  const { id: urlUsername } = useParams();
  const { user } = useContext(AuthContext);

  return (
    <article className="flex items-center justify-evenly flex-row w-full h-auto mt-2 ">
      {urlUsername === user.username ? (
        <>
          <button className="p-2 text-xs w-[33%] text-black font-bold shadow-sm md:text-lg">
            Editar perfil
          </button>
          <button className="p-2 text-xs w-[50%] text-black font-bold shadow-sm md:text-lg">
            Compartir perfil
          </button>
        </>
      ) : (
        <>
          <button className="p-2 text-xs w-[33%] text-black font-bold shadow-sm md:text-lg">
            Seguir
          </button>
        </>
      )}
    </article>
  );
};
