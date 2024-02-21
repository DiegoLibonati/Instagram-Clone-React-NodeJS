import { getFormatDate } from "../../../helpers/getFormatDate";
import { Comment } from "../../../types/types";
import { UserImage } from "../../UserImage/UserImage";
import { useMemo } from "react";

export const ModalPublicationComment = ({ comment }: { comment: Comment }): JSX.Element => {
  const memoDate = useMemo(() => getFormatDate(comment.date), [comment.date]);
  return (
    <li className="flex items-start justify-start flex-row w-full h-auto mb-6">
      <UserImage
        className="rounded-full mr-4 h-8 w-8"
        avatar={comment.avatar}
        name={comment.name}
      ></UserImage>
      <div className="flex items-start justify-start flex-col w-[80%] h-auto">
        <p className="text-black text-sm">
          <span className="font-medium">{comment.username}</span>{" "}
          {comment.description}
        </p>
        <div className="flex flex-row items-start justify-start w-full h-auto mt-1">
          <p className="text-xs text-gray-400 mr-2">{memoDate}</p>
        </div>
      </div>
    </li>
  );
};
