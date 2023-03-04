import { Publication as PublicationType } from "../../../types/types";
import { PublicationActions } from "./PublicationActions";
import { PublicationForm } from "./PublicationForm";
import { PublicationHeader } from "./PublicationHeader";
import { PublicationInformation } from "./PublicationInformation";

export const Publication = ({
  publication,
}: {
  publication: PublicationType;
}) => {
  const {
    imgLink,
    description,
    likes,
    comments,
    date,
    username,
    avatar,
    name,
  } = publication;
  return (
    <article className="flex items-start justify-center flex-col w-full h-auto mb-5">
      <PublicationHeader
        avatar={avatar}
        name={name}
        username={username}
      ></PublicationHeader>
      <img
        src={imgLink}
        alt={description}
        className="w-full h-auto max-h-[600px] object-cover"
      ></img>
      <PublicationActions></PublicationActions>
      <PublicationInformation
        likes={likes}
        username={username}
        description={description}
        comments={comments}
        publication={publication}
      ></PublicationInformation>
      <PublicationForm></PublicationForm>
      <h5 className="text-gray-500 text-sm w-100 p-2 my-[2px]">Hace {date}</h5>
    </article>
  );
};
