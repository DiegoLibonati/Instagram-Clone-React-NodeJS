import { useContext } from "react";
import { UIContext } from "../../../../../contexts/UIContext";
import { SliderFullScreen } from "../../../../../ui/components/SliderFullScreen/SliderFullScreen";
import { CommentsMobileComments } from "./CommentsMobileComments";
import { CommentsMobileForm } from "./CommentsMobileForm";
import { CommentsMobileHeader } from "./CommentsMobileHeader";
import { CommentsMobilePublication } from "./CommentsMobilePublication";

export const CommentsMobile = () => {
  const { modal } = useContext(UIContext);

  return (
    <SliderFullScreen isTrue={modal.isOpen && modal.type === "publication"}>
      <CommentsMobileHeader></CommentsMobileHeader>

      <CommentsMobilePublication></CommentsMobilePublication>

      <CommentsMobileComments></CommentsMobileComments>

      <CommentsMobileForm></CommentsMobileForm>
    </SliderFullScreen>
  );
};
