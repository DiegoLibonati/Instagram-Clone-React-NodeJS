import {
  BsArchive,
  BsChat,
  BsSuitHeart,
  BsSuitHeartFill,
} from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useContext } from "react";
import { getFormatDate } from "../../../helpers/getFormatDate";
import { useMemo } from "react";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { isPublicationLikedByUser } from "../../../helpers/isPublicationLikedByUser";
import { useLike } from "../../../hooks/useLike";

export const ModalPublicationActions = () => {
  const { activePublication } = useContext(PublicationContext);
  const { user } = useContext(AuthContext);
  const { handleAddLike, handleRemoveLike } = useLike();

  const date = useMemo(
    () => getFormatDate(activePublication.date),
    [activePublication.date]
  );

  const isPublicationLikedByUserMemo = useMemo(
    () => isPublicationLikedByUser(activePublication, user.id),
    [activePublication, user.id]
  );

  return (
    <div className="flex flex-col items-start justify-start w-2/6 h-auto p-4 shadow-slate-200 shadow-sm fixed bottom-0 right-0 bg-white">
      <div className="flex items-center justify-between w-full h-auto">
        <div className="flex items-center justify-between h-auto">
          {isPublicationLikedByUserMemo ? (
            <BsSuitHeartFill
              color="red"
              size={25}
              className="mr-4 cursor-pointer"
              onClick={() =>
                handleRemoveLike({
                  idPublication: activePublication.id,
                })
              }
            ></BsSuitHeartFill>
          ) : (
            <BsSuitHeart
              color="black"
              size={25}
              className="mr-4 cursor-pointer"
              onClick={() =>
                handleAddLike({
                  idPublication: activePublication.id,
                })
              }
            ></BsSuitHeart>
          )}
          <BsChat
            color="black"
            size={25}
            className="mr-4 cursor-pointer"
          ></BsChat>
          <FiSend
            color="black"
            size={25}
            className="mr-4 cursor-pointer"
          ></FiSend>
        </div>
        <BsArchive color="black" size={25}></BsArchive>
      </div>

      <div className="flex flex-col items-start justify-start w-full h-auto mt-2">
        <h2 className="text-sm font-medium">
          {activePublication.likes.length} Me gusta
        </h2>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
      </div>

      <form className="flex flex-row items-center justify-between w-full h-auto mt-3 shadow-inner p-2">
        <input
          className="outline-none w-2/3"
          placeholder="Agrega un comentario..."
        ></input>
        <button className="text-blue-700 w-1/3 text-end">Publicar</button>
      </form>
    </div>
  );
};
