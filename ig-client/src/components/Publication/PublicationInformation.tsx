import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PublicationContext } from "../../contexts/Publications/PublicationContext";
import { UIContext } from "../../contexts/Ui/UIContext";
import { Publication } from "../../types/types";

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
}): JSX.Element => {
  const uiContextStore = useContext(UIContext);
  const publicationContextStore = useContext(PublicationContext);

  const location = useLocation();

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
            uiContextStore?.setModalOpen("publication");
            publicationContextStore?.setActivePublication({
              ...publication,
              context: location.pathname === "/" ? "feed" : "",
            });
          }}
        >
          ver los {comments.length} comentarios
        </button>
      )}
    </div>
  );
};
