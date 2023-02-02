import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { UIContext } from "../../../../../contexts/UIContext";

export const CommentsMobileHeader = () => {
  const { setModalClose } = useContext(UIContext);

  return (
    <div className="flex items-center justify-between flex-row w-full h-14 p-2 border-gray-300 border-b-[1px] fixed top-0 bg-white transition transform translate-y-1">
      <button onClick={setModalClose}>
        <BsArrowLeft color="black" size={25}></BsArrowLeft>
      </button>
      <h2 className="text-md font-bold">Comentarios</h2>
      <FiSend color="black" size={25}></FiSend>
    </div>
  );
};
