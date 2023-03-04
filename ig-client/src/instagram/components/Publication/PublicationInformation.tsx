import { useContext } from "react";
import { PublicationContext } from "../../../contexts/PublicationContext";
import { UIContext } from "../../../contexts/UIContext";
import { Publication } from "../../../types/types";

export const PublicationInformation = ({
  likes,
  username,
  description,
  comments,
  publication,
}: {
  likes: Publication["likes"];
  username: string;
  description: string;
  comments: Publication["comments"];
  publication: Publication;
}) => {
  const { setModalOpen } = useContext(UIContext);
  const { setActivePublication } = useContext(PublicationContext);

  return (
    <div className="flex items-start justify-center flex-col w-full p-2">
      <h3 className="text-black text-sm font-medium my-[2px]">
        {likes.length} Me gusta
      </h3>
      <h4 className="text-black text-sm my-[2px]">
        <span className="font-medium">{username}</span> {description}
      </h4>
      {comments.length > 0 && (
        <button
          className="text-gray-500 text-sm my-[2px]"
          onClick={() => {
            setModalOpen("publication");
            setActivePublication({ ...publication });
          }}
        >
          ver los {comments.length} comentarios
        </button>
      )}
    </div>
  );
};
