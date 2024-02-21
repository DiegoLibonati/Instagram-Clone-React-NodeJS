import { FormEvent, useContext } from "react";
import { instagramApiNewComment } from "../api/Comment/instagramApiNewComment";
import { FeedContext } from "../contexts/Feed/FeedContext";
import { PublicationContext } from "../contexts/Publications/PublicationContext";
import { Publication, UseComment } from "../types/types";
import { useProfileUser } from "./useProfileUser";

export const useComment = (): UseComment => {
  const publicationContextStore = useContext(PublicationContext);
  const feedContextStore = useContext(FeedContext);
  const { user, setUser } = useProfileUser();

  const handleAddComment = async (
    e: FormEvent<HTMLFormElement>,
    idPublication: string,
    comment: string,
    context: string,
    onResetForm: () => void
  ) => {
    e.preventDefault();
    const request = await instagramApiNewComment(
      idPublication,
      comment,
      context
    );

    const payload = request.payload;

    // Comment IN ACTIVE PUBLICATION MODAL

    if (publicationContextStore?.activePublication) {
      publicationContextStore?.setActivePublication!({
        ...publicationContextStore?.activePublication,
        comments: [
          ...publicationContextStore?.activePublication.comments,
          payload.comment,
        ],
      });
    }
    console.log(context);
    // Comment PROFILES UPDATE
    if (!context) {
      setUser!({ ...user, publications: payload.publications });
      onResetForm();
      return;
    }

    // Comment IN FEED

    const feedUpdated = feedContextStore?.feed.map(
      (publication: Publication) => {
        if (publication._id === payload.comment.idPost) {
          publication.comments.push(payload.comment);
          return publication;
        }
        return publication;
      }
    );
    onResetForm();
    return feedContextStore?.setFeed(feedUpdated!);
  };

  return { handleAddComment };
};
