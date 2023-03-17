import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useMemo } from "react";
import { UserImage } from "../UserImage/UserImage";
import { handleFollow } from "../../helpers/handleFollow";
import { handleUnFollow } from "../../helpers/handleUnFollow";
import { UIContext } from "../../../contexts/UIContext";
import { isUserFollow } from "../../helpers/isUserFollow";
import { ProfileContext } from "../../../contexts/ProfileContext";

export const Notification = ({
  avatar,
  name,
  username,
  type,
}: {
  avatar: string;
  name: string;
  username: string;
  type: string;
}) => {
  const { setAlertOpen } = useContext(UIContext);
  const { user, onLogin } = useContext(AuthContext);
  const { userForeignProfile, setUserForeignProfile } =
    useContext(ProfileContext);

  const isForeignUserFollowMemo = useMemo(
    () => isUserFollow(user, username, "following"),
    [user, username]
  );

  return (
    <li className="flex flex-row items-center justify-start relative w-full h-16 mt-1">
      <UserImage
        avatar={avatar}
        className="rounded-full w-12 h-12"
        name={name}
      ></UserImage>

      <p className="text-xs ml-1">
        {type === "follow" && (
          <>
            <span className="font-semibold">{username}</span> comenzo a
            seguirte.
          </>
        )}

        {type === "like" && (
          <>
            A <span className="font-semibold">{username}</span> le gusto tu
            publicacion.
          </>
        )}
      </p>

      {type === "like" && (
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Yellow-Camaro-PNG-Photos.png"
          alt="auto"
          className="w-10 h-10 object-contain absolute right-2"
        ></img>
      )}

      {!isForeignUserFollowMemo.length && (
        <button
          className="p-2 text-xs w-16 text-white font-bold shadow-sm bg-blue-500 rounded-md absolute right-2"
          onClick={() =>
            handleFollow(
              setAlertOpen,
              onLogin,
              userForeignProfile,
              setUserForeignProfile,
              username
            )
          }
        >
          Seguir
        </button>
      )}

      {isForeignUserFollowMemo.length > 0 && (
        <button
          className="p-2 text-xs w-18 text-black font-bold shadow-sm bg-zinc-200 rounded-md absolute right-2"
          onClick={() =>
            handleUnFollow(
              setAlertOpen,
              onLogin,
              userForeignProfile,
              setUserForeignProfile,
              username
            )
          }
        >
          Siguiendo
        </button>
      )}
    </li>
  );
};
