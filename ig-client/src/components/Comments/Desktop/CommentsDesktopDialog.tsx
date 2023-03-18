import { CommentsDesktopDialogComments } from "./CommentsDesktopDialogComments";
import { CommentsDesktopDialogHeader } from "./CommentsDesktopDialogHeader";
import { CommentsDesktopDialogPublication } from "./CommentsDesktopDialogPublication";

export const CommentsDesktopDialog = () => {
  return (
    <>
      <div className="flex items-start justify-start flex-col w-2/6 h-full relative bg-white shadow-slate-300 shadow-sm overflow-y-scroll overflow-x-hidden no-scrollbar">
        <CommentsDesktopDialogHeader></CommentsDesktopDialogHeader>

        <div className="flex items-start justify-center flex-col w-full h-auto p-2 mt-2 mb-40">
          <CommentsDesktopDialogPublication></CommentsDesktopDialogPublication>
          <CommentsDesktopDialogComments></CommentsDesktopDialogComments>
        </div>
      </div>
    </>
  );
};
