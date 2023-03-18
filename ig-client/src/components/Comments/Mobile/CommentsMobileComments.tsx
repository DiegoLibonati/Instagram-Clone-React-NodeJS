import { CommentsMobileComment } from "./CommentsMobileComment";
import { useContext } from "react";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";

export const CommentsMobileComments = () => {
  const { activePublication } = useContext(PublicationContext);

  return (
    <ul className="flex items-center justify-start flex-col w-full min-h-[calc(h-screen - h-14)] mb-24">
      {activePublication.comments.map((comment: any) => {
        return <CommentsMobileComment key={comment.id}></CommentsMobileComment>;
      })}
    </ul>
  );
};
