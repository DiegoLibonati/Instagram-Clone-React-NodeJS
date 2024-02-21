import { instagramApiNewLike } from "../api/Like/instagramApiNewLike";
import { useProfileUser } from "./useProfileUser";
import { useContext } from "react";
import { PublicationContext } from "../contexts/Publications/PublicationContext";
import { instagramApiRemoveLike } from "../api/Like/instagramApiRemoveLike";
import { Like, Publication, UseLike } from "../types/types";
import { FeedContext } from "../contexts/Feed/FeedContext";

export const useLike = (): UseLike => {
  const { user, setUser } = useProfileUser();
  const publicationContextStore = useContext(PublicationContext);
  const feedContextStore = useContext(FeedContext);

  const handleAddLike = async ({
    idPublication,
    context,
  }: {
    idPublication: string;
    context?: string;
  }) => {
    const request = await instagramApiNewLike(idPublication, context);

    const payload = request.payload;

    // LIKE IN ACTIVE PUBLICATION MODAL

    if (publicationContextStore?.activePublication) {
      publicationContextStore?.setActivePublication!({
        ...publicationContextStore?.activePublication,
        likes: [
          ...publicationContextStore?.activePublication.likes,
          payload.like,
        ],
      });
    }

    // LIKE PROFILES UPDATE
    if (!context) {
      setUser!({ ...user, publications: payload.publications });

      return;
    }

    // LIKE IN FEED

    const feedUpdated = feedContextStore?.feed.map(
      (publication: Publication) => {
        if (publication._id === payload.like.idPost) {
          publication.likes.push(payload.like);
          return publication;
        }
        return publication;
      }
    );

    return feedContextStore?.setFeed(feedUpdated!);
  };

  const handleRemoveLike = async ({
    idPublication,
    context,
  }: {
    idPublication: string;
    context?: string;
  }) => {
    const request = await instagramApiRemoveLike(idPublication, context);

    const payload = request.payload;

    // LIKE IN ACTIVE PUBLICATION MODAL
    if (publicationContextStore?.activePublication) {
      const likes = publicationContextStore?.activePublication.likes.filter(
        (like: Like) => like._id !== payload.like._id
      );
      publicationContextStore?.setActivePublication!({
        ...publicationContextStore?.activePublication,
        likes: likes,
      });
    }

    // LIKES PROFILE UPDATE
    if (!context) {
      setUser!({ ...user, publications: payload.publications });

      return;
    }

    // REMOVE LIKE IN FEED
    const feedUpdated = feedContextStore?.feed.map(
      (publication: Publication) => {
        if (publication._id === payload.like.idPost) {
          publication.likes = publication.likes.filter(
            (like: Like) => like._id !== payload.like._id
          );
          return publication;
        }
        return publication;
      }
    );

    return feedContextStore?.setFeed(feedUpdated!);
  };

  return {
    handleAddLike,
    handleRemoveLike,
  };
};
