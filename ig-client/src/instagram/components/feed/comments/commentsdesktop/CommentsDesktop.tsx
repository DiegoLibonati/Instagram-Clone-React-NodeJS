import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CommentsDesktopContainer } from "./CommentsDesktopContainer";
import { UIContext } from "../../../../../contexts/UIContext";

export const CommentsDesktop = () => {
  const { setModalClose } = useContext(UIContext);
  return (
    <div
      className={`flex items-center justify-center flex-row bg-black bg-opacity-50 w-screen h-screen z-[999999999] fixed`}
    >
      <AiOutlineClose
        size={25}
        color="white"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={setModalClose}
      ></AiOutlineClose>
      <CommentsDesktopContainer></CommentsDesktopContainer>
    </div>
  );
};
