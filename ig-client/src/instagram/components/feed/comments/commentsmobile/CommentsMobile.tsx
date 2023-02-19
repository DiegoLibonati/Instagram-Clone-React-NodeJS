import { useContext } from "react";
import { UIContext } from "../../../../../contexts/UIContext";
import { CommentsMobileComments } from "./CommentsMobileComments";
import { CommentsMobileForm } from "./CommentsMobileForm";
import { CommentsMobileHeader } from "./CommentsMobileHeader";
import { CommentsMobilePublication } from "./CommentsMobilePublication";

export const CommentsMobile = () => {
  const { modal } = useContext(UIContext);

  return (
    <div
      className={`flex items-start justify-start flex-col bg-white w-screen h-screen fixed z-[999999999] overflow-x-hidden overflow-y-scroll transition transform ${
        modal.isOpen && modal.type === "publication"
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >
      <CommentsMobileHeader></CommentsMobileHeader>

      <CommentsMobilePublication></CommentsMobilePublication>

      <CommentsMobileComments></CommentsMobileComments>

      <CommentsMobileForm></CommentsMobileForm>
    </div>
  );
};
