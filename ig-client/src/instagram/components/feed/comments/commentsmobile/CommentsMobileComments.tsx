import { CommentsMobileComment } from "./CommentsMobileComment";

export const CommentsMobileComments = () => {
  return (
    <ul className="flex items-center justify-start flex-col w-full min-h-[calc(h-screen - h-14)] mb-24">
      <CommentsMobileComment></CommentsMobileComment>
      <CommentsMobileComment></CommentsMobileComment>
      <CommentsMobileComment></CommentsMobileComment>
    </ul>
  );
};
