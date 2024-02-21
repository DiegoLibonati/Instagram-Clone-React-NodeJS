import { Like, Publication } from "../types/types";

export const isPublicationLikedByUser = (
  publication: Publication,
  idUser: string
): boolean => {
  return publication.likes.some(
    (like: Like) =>
      like.idAuthor === idUser &&
      like.idPost === (publication._id || publication.id)
  );
};
