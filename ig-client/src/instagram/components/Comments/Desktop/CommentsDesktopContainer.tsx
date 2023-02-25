import { CommentsDesktopDialog } from "./CommentsDesktopDialog";
import { CommentsDesktopDialogActions } from "./CommentsDesktopDialogActions";
import { CommentsDesktopImage } from "./CommentsDesktopImage";

export const CommentsDesktopContainer = () => {
  return (
    <div className="flex items-center justify-center flex-row w-[75%] h-[90%] bg-black shadow-md contain-content">
      <CommentsDesktopImage></CommentsDesktopImage>

      <CommentsDesktopDialog></CommentsDesktopDialog>
      <CommentsDesktopDialogActions></CommentsDesktopDialogActions>
    </div>
  );
};
