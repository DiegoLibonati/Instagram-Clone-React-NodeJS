import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";
import { UIContext } from "../../../contexts/Ui/UIContext";

export const CommentsMobileHeader = () => {
  const { setModalClose } = useContext(UIContext);
  const { setActivePublication } = useContext(PublicationContext);

  return (
    <div className="flex items-center justify-between flex-row w-full h-14 p-2 border-gray-300 border-b-[1px] fixed top-0 bg-white transition transform translate-y-1">
      <button
        onClick={() => {
          setModalClose();
          setActivePublication({
            id: "",
            imgLink: "",
            description: "",
            likes: [],
            comments: [],
            date: "",
            username: "",
            avatar: "",
            name: "",
          });
        }}
      >
        <BsArrowLeft color="black" size={25}>
          {" "}
        </BsArrowLeft>
      </button>
      <h2 className="text-md font-bold">Comentarios</h2>
      <FiSend color="black" size={25}></FiSend>
    </div>
  );
};
