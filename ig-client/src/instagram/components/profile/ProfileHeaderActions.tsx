import { useNavigate } from "react-router-dom";
import { useProfileUser } from "../../hooks/useProfileUser";

export const ProfileHeaderActions = () => {
  const { user, isMainUser, handleFollow, handleUnFollow } = useProfileUser();
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
          {user.userAuthFollowing ? (
            <button
              className="p-2 text-xs w-full text-black font-bold shadow-sm md:text-lg bg-zinc-200 rounded-md"
              onClick={handleUnFollow}
            >
              Siguiendo
            </button>
          ) : user.userForeignFollowing ? (
            <button
              className="p-2 text-xs w-full text-white font-bold shadow-sm md:text-lg bg-blue-500 rounded-md"
              onClick={handleFollow}
            >
              Seguir tambien
            </button>
          ) : (
            <button
              className="p-2 text-xs w-full text-white font-bold shadow-sm md:text-lg bg-blue-500 rounded-md"
              onClick={handleFollow}
            >
              Seguir
            </button>
          )}
        </>
      )}
    </article>
  );
};
