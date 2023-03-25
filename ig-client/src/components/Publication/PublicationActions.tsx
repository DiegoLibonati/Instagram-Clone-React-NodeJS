import {
  BsSuitHeart,
  BsChat,
  BsArchive,
  BsSuitHeartFill,
} from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useLike } from "../../hooks/useLike";
import { Publication } from "../../types/types";
import { useContext, useMemo } from "react";
import { isPublicationLikedByUser } from "../../helpers/isPublicationLikedByUser";

export const PublicationActions = ({
  publication,
  context,
}: {
  publication: Publication;
  context?: string;
}) => {
  const { handleAddLike, handleRemoveLike } = useLike();
  const { user } = useContext(AuthContext);

  const isPublicationLikedByUserMemo = useMemo(
    () => isPublicationLikedByUser(publication, user.id),
    [publication, user.id]
  );

  return (
    <div className="flex items-center justify-between w-full p-2 h-auto">
      <div className="flex items-center justify-between h-auto">
        {isPublicationLikedByUserMemo ? (
          <BsSuitHeartFill
            color="red"
            size={25}
            className="mr-4 cursor-pointer"
            onClick={() =>
              handleRemoveLike({
                idPublication: publication._id!,
                context: context,
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
                idPublication: publication._id!,
                context: context,
              })
            }
          ></BsSuitHeart>
        )}

        <BsChat
          color="black"
          size={25}
          className="mr-4 cursor-pointer"
        ></BsChat>
        <FiSend color="black" size={25} className="mr-4"></FiSend>
      </div>
      <BsArchive color="black" size={25}></BsArchive>
    </div>
  );
};
