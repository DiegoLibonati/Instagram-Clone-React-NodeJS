import { useContext, useMemo } from "react";
import { UserImage } from "../UserImage/UserImage";
import { handleFollow } from "../../helpers/handleFollow";
import { handleUnFollow } from "../../helpers/handleUnFollow";
import { isUserFollow } from "../../helpers/isUserFollow";
import { UIContext } from "../../contexts/Ui/UIContext";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ProfileContext } from "../../contexts/Profile/ProfileContext";
import { Link } from "react-router-dom";
import { Publication } from "../../types/types";

export const Notification = ({
  idAuthor,
  avatar,
  name,
  username,
  type,
  idPost,
}: {
  idAuthor: string;
  avatar: string;
  name: string;
  username: string;
  type: string;
  idPost?: string;
}) => {
  const { setAlertOpen } = useContext(UIContext);
  const { user, onLogin } = useContext(AuthContext);
  const { userForeignProfile, setUserForeignProfile } =
    useContext(ProfileContext);

  const isForeignUserFollowMemo = useMemo(
    () => isUserFollow(user, idAuthor, "following"),
    [user, idAuthor]
  );

  const getImage = (idPublication: string) => {
    if (!idPublication) return "";
    const publication = user.publications.find(
      (publication: Publication) => publication._id === idPublication
    );

    return publication.imgLink;
  };

  return (
    <li className="flex flex-row items-center justify-start relative w-full h-16 mt-1 pr-1">
      <UserImage
        avatar={avatar}
        className="rounded-full w-12 h-12"
        name={name}
      ></UserImage>

      <p className="text-xs ml-1">
        {type === "follow" && (
          <>
            <Link to={`/${username}`}>
              <span className="font-semibold cursor-pointer">{username}</span>
            </Link>{" "}
            comenzo a seguirte.
          </>
        )}

        {type === "like" && (
          <>
            A{" "}
            <Link to={`/${username}`}>
              <span className="font-semibold cursor-pointer">{username}</span>
            </Link>{" "}
            le gusto tu publicacion.
          </>
        )}
      </p>

      {type === "like" && (
        <img
          src={getImage(idPost!)}
          alt="auto"
          className="w-10 h-10 object-contain ml-auto"
        ></img>
      )}

      {!isForeignUserFollowMemo.length && type === "follow" && (
        <button
          className="p-2 text-xs w-16 text-white font-bold shadow-sm bg-blue-500 rounded-md ml-auto"
          onClick={() =>
            handleFollow(
              setAlertOpen,
              user,
              onLogin,
              userForeignProfile,
              setUserForeignProfile,
              idAuthor
            )
          }
        >
          Seguir
        </button>
      )}

      {isForeignUserFollowMemo.length > 0 && type === "follow" && (
        <button
          className="p-2 text-xs w-18 text-black font-bold shadow-sm bg-zinc-200 rounded-md ml-auto"
          onClick={() =>
            handleUnFollow(
              setAlertOpen,
              user,
              onLogin,
              userForeignProfile,
              setUserForeignProfile,
              idAuthor
            )
          }
        >
          Siguiendo
        </button>
      )}
    </li>
  );
};
