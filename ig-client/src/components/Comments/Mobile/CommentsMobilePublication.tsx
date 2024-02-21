import { UserImage } from "../../UserImage/UserImage";
import { useContext, useMemo } from "react";
import { getFormatDate } from "../../../helpers/getFormatDate";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";

export const CommentsMobilePublication = (): JSX.Element => {
  const publicationContextStore = useContext(PublicationContext);

  const date = useMemo(
    () => getFormatDate(publicationContextStore?.activePublication?.date!),
    [publicationContextStore?.activePublication?.date]
  );

  return (
    <div className="flex items-start justify-start flex-row w-full h-auto p-2 mt-14">
      <UserImage
        className="rounded-full mr-2 h-8 w-8"
        avatar={publicationContextStore?.activePublication?.avatar!}
        name={publicationContextStore?.activePublication?.name!}
      ></UserImage>
      <div className="flex items-start justify-start flex-col w-full h-auto">
        <div className="flex items-center justify-start flex-row w-full h-auto">
          <h3 className="text-black mr-2 text-sm font-bold">
            {publicationContextStore?.activePublication?.username}
          </h3>
          <h4 className="text-gray-400 text-xs">{date!}</h4>
        </div>
        <p className="text-sm">
          {publicationContextStore?.activePublication?.description}
        </p>
      </div>
    </div>
  );
};
