import { useContext } from "react";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";
import { ModalPublicationComment } from "./ModalPublicationComment";

export const ModalPublicationComments = () => {
  const { activePublication } = useContext(PublicationContext);

  return (
    <ul className="flex items-start justify-start flex-col w-auto h-full mt-5">
      {activePublication.comments?.map((comment: any) => {
        return (
          <ModalPublicationComment key={comment.id}></ModalPublicationComment>
        );
      })}
    </ul>
  );
};
