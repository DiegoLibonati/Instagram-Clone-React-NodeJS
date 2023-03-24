import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { ModalPublicationContainer } from "./ModalPublicationContainer";

export const ModalPublication = () => {
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
      <ModalPublicationContainer></ModalPublicationContainer>
    </div>
  );
};
