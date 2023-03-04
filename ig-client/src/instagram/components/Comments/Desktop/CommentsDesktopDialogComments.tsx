import { PublicationContext } from "../../../../contexts/PublicationContext";
import { CommentsDesktopDialogComment } from "./CommentsDesktopDialogComment";
import { useContext } from "react";

export const CommentsDesktopDialogComments = () => {
  const { activePublication } = useContext(PublicationContext);

  return (
    <ul className="flex items-start justify-start flex-col w-auto h-full mt-5">
      {activePublication.comments.map((comment: any) => {
        return (
          <CommentsDesktopDialogComment
            key={comment.id}
          ></CommentsDesktopDialogComment>
        );
      })}
    </ul>
  );
};
