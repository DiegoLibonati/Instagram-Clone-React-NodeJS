import { useNavigate } from "react-router-dom";
import { useProfileUser } from "../../hooks/useProfileUser";

export const ProfileHeaderActions = () => {
  const { isMainUser } = useProfileUser();
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/accounts/edit");
  };

  return (
    <article className="flex items-center justify-evenly flex-row w-full h-auto mt-2 ">
      {isMainUser ? (
        <>
          <button
            className="p-2 text-xs w-[33%] text-black font-bold shadow-sm md:text-lg"
            onClick={handleEditProfile}
          >
            Editar perfil
          </button>
          <button className="p-2 text-xs w-[50%] text-black font-bold shadow-sm md:text-lg">
            Compartir perfil
          </button>
        </>
      ) : (
        <>
          <button className="p-2 text-xs w-full text-white font-bold shadow-sm md:text-lg bg-blue-500 rounded-md">
            Seguir
          </button>
        </>
      )}
    </article>
  );
};
