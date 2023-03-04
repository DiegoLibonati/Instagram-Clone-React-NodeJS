import { useContext } from "react";
import { PublicationContext } from "../../../../contexts/PublicationContext";

export const CommentsDesktopImage = () => {
  const { activePublication } = useContext(PublicationContext);

  return (
    <img
      src={activePublication.imgLink}
      alt={activePublication.name}
      className="w-4/6 h-auto object-cover"
    ></img>
  );
};
