import { CommentsMobileComments } from "./CommentsMobileComments";
import { CommentsMobileForm } from "./CommentsMobileForm";
import { CommentsMobileHeader } from "./CommentsMobileHeader";
import { CommentsMobilePublication } from "./CommentsMobilePublication";

export const CommentsMobile = () => {
  return (
    <div className="flex items-start justify-start flex-col bg-white w-screen h-screen fixed z-[999999999] overflow-x-hidden overflow-y-scroll">
      <CommentsMobileHeader></CommentsMobileHeader>

      <CommentsMobilePublication></CommentsMobilePublication>

      <CommentsMobileComments></CommentsMobileComments>

      <CommentsMobileForm></CommentsMobileForm>
    </div>
  );
};
