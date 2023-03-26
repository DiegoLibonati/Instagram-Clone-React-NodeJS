import { instagramApiNewLike } from "../api/Like/instagramApiNewLike";
import { useProfileUser } from "./useProfileUser";
import { useContext } from "react";
import { PublicationContext } from "../contexts/Publications/PublicationContext";
import { instagramApiRemoveLike } from "../api/Like/instagramApiRemoveLike";
import { Like, Publication } from "../types/types";
import { FeedContext } from "../contexts/Feed/FeedContext";

export const useLike = () => {
  const { user, setUser } = useProfileUser();
  const { activePublication, setActivePublication } =
    useContext(PublicationContext);
  const { feed, setFeed } = useContext(FeedContext);

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

    if (activePublication) {
      setActivePublication!({
        ...activePublication,
        likes: [...activePublication.likes, payload.like],
      });
    }

    // LIKE PROFILES UPDATE
    if (!context) {
      setUser!({ ...user, publications: payload.publications });

      return;
    }

    // LIKE IN FEED

    const feedUpdated = feed.map((publication: Publication) => {
      if (publication._id === payload.like.idPost) {
        publication.likes.push(payload.like);
        return publication;
      }
      return publication;
    });

    return setFeed(feedUpdated);
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
    if (activePublication) {
      const likes = activePublication.likes.filter(
        (like: Like) => like._id !== payload.like._id
      );
      setActivePublication!({
        ...activePublication,
        likes: likes,
      });
    }

    // LIKES PROFILE UPDATE
    if (!context) {
      setUser!({ ...user, publications: payload.publications });

      return;
    }

    // REMOVE LIKE IN FEED
    const feedUpdated = feed.map((publication: Publication) => {
      if (publication._id === payload.like.idPost) {
        publication.likes = publication.likes.filter(
          (like: Like) => like._id !== payload.like._id
        );
        return publication;
      }
      return publication;
    });

    return setFeed(feedUpdated);
  };

  return {
    handleAddLike,
    handleRemoveLike,
  };
};
