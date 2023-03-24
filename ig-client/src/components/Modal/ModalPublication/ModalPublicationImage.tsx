import { useContext } from "react";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";

export const ModalPublicationImage = () => {
  const { activePublication } = useContext(PublicationContext);

  return (
    <img
      src={activePublication.imgLink}
      alt={activePublication.name}
      className="w-4/6 h-auto object-cover"
    ></img>
  );
};
