import { useNavigate } from "react-router-dom";
import { useProfileUser } from "../../hooks/useProfileUser";
import { useContext, useMemo } from "react";
import { isUserFollow } from "../../helpers/isUserFollow";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useFollow } from "../../hooks/useFollow";

export const ProfileHeaderActions = (): JSX.Element => {
  const { user, isMainUser } = useProfileUser();
  const { handleFollow, handleUnFollow } = useFollow();
  const authContextStore = useContext(AuthContext);

  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/accounts/edit");
  };

  const isForeignUserFollowMemo = useMemo(
    () => isUserFollow(authContextStore?.user!, user.id, "followers"),
    [authContextStore?.user, user.id]
  );

  const isAuthUserFollowMemo = useMemo(
    () => isUserFollow(user, authContextStore?.user.id!, "followers"),
    [user, authContextStore?.user.id]
  );

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
          {isAuthUserFollowMemo ? (
            <button
              className="p-2 text-xs w-full text-black font-bold shadow-sm md:text-lg bg-zinc-200 rounded-md"
              onClick={() => handleUnFollow()}
            >
              Siguiendo
            </button>
          ) : isForeignUserFollowMemo ? (
            <button
              className="p-2 text-xs w-full text-white font-bold shadow-sm md:text-lg bg-blue-500 rounded-md"
              onClick={() => handleFollow()}
            >
              Seguir tambien
            </button>
          ) : (
            <button
              className="p-2 text-xs w-full text-white font-bold shadow-sm md:text-lg bg-blue-500 rounded-md"
              onClick={() => handleFollow()}
            >
              Seguir
            </button>
          )}
        </>
      )}
    </article>
  );
};
