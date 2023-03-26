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
import { UIContext } from "../../contexts/Ui/UIContext";
import { PublicationContext } from "../../contexts/Publications/PublicationContext";
import { useLocation } from "react-router-dom";

export const PublicationActions = ({
  publication,
  context,
}: {
  publication: Publication;
  context?: string;
}) => {
  const { handleAddLike, handleRemoveLike } = useLike();
  const { user } = useContext(AuthContext);
  const { setModalOpen } = useContext(UIContext);
  const { setActivePublication } = useContext(PublicationContext);
  const location = useLocation();

  const handleOpenComments = () => {
    setModalOpen("publication");
    setActivePublication({
      ...publication,
      context: location.pathname === "/" ? "feed" : "",
    });
  };

  return (
    <div className="flex items-center justify-between w-full p-2 h-auto">
      <div className="flex items-center justify-between h-auto">
        {isPublicationLikedByUser(publication, user.id) ? (
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
          onClick={handleOpenComments}
        ></BsChat>
        <FiSend color="black" size={25} className="mr-4"></FiSend>
      </div>
      <BsArchive color="black" size={25}></BsArchive>
    </div>
  );
};
