import { PublicationContext } from "../../../../contexts/PublicationContext";
import { UserImage } from "../../UserImage/UserImage";
import { useContext, useMemo } from "react";
import { getFormatDate } from "../../../helpers/getFormatDate";

export const CommentsDesktopDialogPublication = () => {
  const { activePublication } = useContext(PublicationContext);

  const date = useMemo(
    () => getFormatDate(activePublication.date),
    [activePublication.date]
  );

  return (
    <div className="flex items-start justify-start flex-row w-auto h-auto">
      <UserImage
        className="rounded-full mr-4 h-8 w-8"
        avatar={activePublication.avatar}
        name={activePublication.id}
      ></UserImage>
      <div className="flex items-start justify-start flex-col w-[80%] h-auto">
        <p className="text-black text-sm ">
          <span className="font-medium">{activePublication.username}</span>{" "}
          {activePublication.description}
        </p>
        <p className="text-gray-400 text-xs mt-1">{date}</p>
      </div>
    </div>
  );
};
