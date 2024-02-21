import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";
import { UIContext } from "../../../contexts/Ui/UIContext";

export const CommentsMobileHeader = (): JSX.Element => {
  const uiContextStore = useContext(UIContext);
  const publicationContextStore = useContext(PublicationContext);

  return (
    <div className="flex items-center justify-between flex-row w-full h-14 p-2 border-gray-300 border-b-[1px] fixed top-0 bg-white transition transform translate-y-1">
      <button
        onClick={() => {
          uiContextStore?.setModalClose();
          publicationContextStore?.setActivePublication(null!);
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
