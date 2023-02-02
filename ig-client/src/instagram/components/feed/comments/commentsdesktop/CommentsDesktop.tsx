import { CommentsDesktopContainer } from "./CommentsDesktopContainer";

export const CommentsDesktop = () => {
  return (
    <div
      className={`flex items-center justify-center flex-row bg-black bg-opacity-50 w-screen h-screen z-[999999999]`}
    >
      <CommentsDesktopContainer></CommentsDesktopContainer>
    </div>
  );
};
