import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CommentsDesktopContainer } from "./CommentsDesktopContainer";
import { UIContext } from "../../../../contexts/UIContext";
import { PublicationContext } from "../../../../contexts/PublicationContext";

export const CommentsDesktop = () => {
  const { setModalClose } = useContext(UIContext);
  const { setActivePublication } = useContext(PublicationContext);
  return (
    <div
      className={`flex items-center justify-center flex-row bg-black bg-opacity-50 w-screen h-screen z-[999999999] fixed`}
    >
      <AiOutlineClose
        size={25}
        color="white"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => {
          setModalClose();
          setActivePublication({
            id: "",
            imgLink: "",
            description: "",
            likes: [],
            comments: [],
            date: "",
            name: "",
            username: "",
            avatar: "",
          });
        }}
      ></AiOutlineClose>
      <CommentsDesktopContainer></CommentsDesktopContainer>
    </div>
  );
};
