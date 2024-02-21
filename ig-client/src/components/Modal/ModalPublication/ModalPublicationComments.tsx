import { useContext } from "react";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";
import { Comment } from "../../../types/types";
import { ModalPublicationComment } from "./ModalPublicationComment";

export const ModalPublicationComments = (): JSX.Element => {
  const { activePublication } = useContext(PublicationContext)!;

  return (
    <ul className="flex items-start justify-start flex-col w-auto h-full mt-5">
      {activePublication.comments?.map((comment: Comment) => {
        return (
          <ModalPublicationComment
            key={comment._id}
            comment={comment}
          ></ModalPublicationComment>
        );
      })}
    </ul>
  );
};
