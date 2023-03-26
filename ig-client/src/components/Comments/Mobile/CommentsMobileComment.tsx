import { getFormatDate } from "../../../helpers/getFormatDate";
import { Comment } from "../../../types/types";
import { UserImage } from "../../UserImage/UserImage";
import { useMemo } from "react";

export const CommentsMobileComment = ({ comment }: { comment: Comment }) => {
  const memoDate = useMemo(() => getFormatDate(comment.date), [comment.date]);
  return (
    <li className="flex items-start justify-start flex-row w-full h-auto p-2">
      <UserImage
        className="rounded-full mr-2 h-8 w-8"
        avatar={comment.avatar}
        name={comment.name}
      ></UserImage>
      <div className="flex items-start justify-start flex-col w-full h-auto">
        <div className="flex items-center justify-start flex-row w-full h-auto">
          <h3 className="text-black mr-2 text-sm font-bold">
            {comment.username}
          </h3>
          <h4 className="text-gray-400 text-xs">{memoDate}</h4>
        </div>
        <p className="text-sm">{comment.description}</p>
      </div>
    </li>
  );
};
