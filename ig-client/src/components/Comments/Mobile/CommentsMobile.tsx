import { useContext } from "react";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { SliderFullScreen } from "../../SliderFullScreen/SliderFullScreen";
import { CommentsMobileComments } from "./CommentsMobileComments";
import { CommentsMobileForm } from "./CommentsMobileForm";
import { CommentsMobileHeader } from "./CommentsMobileHeader";
import { CommentsMobilePublication } from "./CommentsMobilePublication";

export const CommentsMobile = (): JSX.Element => {
  const uiContextStore = useContext(UIContext);

  return (
    <SliderFullScreen isTrue={uiContextStore?.modal.isOpen! && uiContextStore?.modal.type === "publication"}>
      <CommentsMobileHeader></CommentsMobileHeader>

      <CommentsMobilePublication></CommentsMobilePublication>

      <CommentsMobileComments></CommentsMobileComments>

      <CommentsMobileForm></CommentsMobileForm>
    </SliderFullScreen>
  );
};
