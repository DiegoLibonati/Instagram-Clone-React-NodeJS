import { instagramApiNewLike } from "../api/Like/instagramApiNewLike";
import { useProfileUser } from "./useProfileUser";
import { useContext } from "react";
import { PublicationContext } from "../contexts/Publications/PublicationContext";
import { instagramApiRemoveLike } from "../api/Like/instagramApiRemoveLike";
import { Like } from "../types/types";

export const useLike = () => {
  const { user, setUser } = useProfileUser();
  const { activePublication, setActivePublication } =
    useContext(PublicationContext);

  const handleAddLike = async ({
    idPublication,
    context,
  }: {
    idPublication: string;
    context?: string;
  }) => {
    const request = await instagramApiNewLike(idPublication, context);

    const payload = request.payload;

    // LIKE IN MODAL DESKTOP - MOBILE PROFILES
    if (!context) {
      setUser!({ ...user, publications: payload.publications });

      setActivePublication!({
        ...activePublication,
        likes: [...activePublication.likes, payload.like],
      });

      return;
    }

    // LIKE IN FEED
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

    // REMOVE LIKE IN MODAL DESKTOP - MOBILE PROFILES
    if (!context) {
      setUser!({ ...user, publications: payload.publications });

      const likes = activePublication.likes.filter(
        (like: Like) => like._id !== payload.idLike
      );
      setActivePublication!({
        ...activePublication,
        likes: likes,
      });
      return;
    }

    // REMOVE LIKE IN FEED
  };

  return {
    handleAddLike,
    handleRemoveLike,
  };
};
