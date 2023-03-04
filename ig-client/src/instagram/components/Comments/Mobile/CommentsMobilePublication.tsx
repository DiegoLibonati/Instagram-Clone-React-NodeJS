import { PublicationContext } from "../../../../contexts/PublicationContext";
import { UserImage } from "../../UserImage/UserImage";
import { useContext } from "react";

export const CommentsMobilePublication = () => {
  const { activePublication } = useContext(PublicationContext);

  return (
    <div className="flex items-start justify-start flex-row w-full h-auto p-2 mt-14">
      <UserImage
        className="rounded-full mr-2 h-8 w-8"
        avatar={activePublication.avatar}
        name={activePublication.name}
      ></UserImage>
      <div className="flex items-start justify-start flex-col w-full h-auto">
        <div className="flex items-center justify-start flex-row w-full h-auto">
          <h3 className="text-black mr-2 text-sm font-bold">
            {activePublication.username}
          </h3>
          <h4 className="text-gray-400 text-xs">{activePublication.date}</h4>
        </div>
        <p className="text-sm">{activePublication.description}</p>
      </div>
    </div>
  );
};
