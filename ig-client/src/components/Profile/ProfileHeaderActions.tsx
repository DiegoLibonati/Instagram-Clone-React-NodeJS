import { useNavigate } from "react-router-dom";
import { handleFollow } from "../../helpers/handleFollow";
import { handleUnFollow } from "../../helpers/handleUnFollow";
import { useProfileUser } from "../../hooks/useProfileUser";
import { useContext, useMemo } from "react";
import { isUserFollow } from "../../helpers/isUserFollow";
import { UIContext } from "../../contexts/Ui/UIContext";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ProfileContext } from "../../contexts/Profile/ProfileContext";

export const ProfileHeaderActions = () => {
  const { user, isMainUser } = useProfileUser();
  const { setAlertOpen } = useContext(UIContext);
  const { user: authUser, onLogin } = useContext(AuthContext);
  const { userForeignProfile, setUserForeignProfile } =
    useContext(ProfileContext);
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/accounts/edit");
  };

  const isForeignUserFollowMemo = useMemo(
    () => isUserFollow(authUser, user.id, "followers"),
    [authUser, user.id]
  );

  const isAuthUserFollowMemo = useMemo(
    () => isUserFollow(user, authUser.id, "followers"),
    [user, authUser.id]
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
          {isAuthUserFollowMemo.length > 0 ? (
            <button
              className="p-2 text-xs w-full text-black font-bold shadow-sm md:text-lg bg-zinc-200 rounded-md"
              onClick={() =>
                handleUnFollow(
                  setAlertOpen,
                  authUser,
                  onLogin,
                  userForeignProfile,
                  setUserForeignProfile
                )
              }
            >
              Siguiendo
            </button>
          ) : isForeignUserFollowMemo.length > 0 ? (
            <button
              className="p-2 text-xs w-full text-white font-bold shadow-sm md:text-lg bg-blue-500 rounded-md"
              onClick={() =>
                handleFollow(
                  setAlertOpen,
                  authUser,
                  onLogin,
                  userForeignProfile,
                  setUserForeignProfile
                )
              }
            >
              Seguir tambien
            </button>
          ) : (
            <button
              className="p-2 text-xs w-full text-white font-bold shadow-sm md:text-lg bg-blue-500 rounded-md"
              onClick={() =>
                handleFollow(
                  setAlertOpen,
                  authUser,
                  onLogin,
                  userForeignProfile,
                  setUserForeignProfile
                )
              }
            >
              Seguir
            </button>
          )}
        </>
      )}
    </article>
  );
};
