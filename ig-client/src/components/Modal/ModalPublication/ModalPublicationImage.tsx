import { useContext } from "react";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";

export const ModalPublicationImage = (): JSX.Element => {
  const { activePublication } = useContext(PublicationContext)!;

  return (
    <div className="w-4/6 h-full">
      <img
        src={activePublication.imgLink}
        alt={activePublication.name}
        className="h-full w-full object-contain"
      ></img>
    </div>
  );
};
