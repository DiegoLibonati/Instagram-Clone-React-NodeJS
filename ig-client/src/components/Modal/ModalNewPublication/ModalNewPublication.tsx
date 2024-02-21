import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ModalNewPublicationHeader } from "./ModalNewPublicationHeader";
import { ModalNewPublicationUpload } from "./ModalNewPublicationUpload";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { UserImage } from "../../UserImage/UserImage";

export const ModalNewPublication = (): JSX.Element => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const modalContextStore = useContext(UIContext);
  const publicationContextStore = useContext(PublicationContext);
  const authContextStore = useContext(AuthContext);

  return (
    <div
      className={`flex items-center justify-center absolute w-screen h-screen z-[99999999] ${
        matchMediaQuery && "bg-black bg-opacity-50 "
      }`}
    >
      {matchMediaQuery && (
        <AiOutlineClose
          size={25}
          className="cursor-pointer absolute top-2 right-2"
          onClick={modalContextStore?.setModalClose}
        ></AiOutlineClose>
      )}
      <div
        className={`flex items-start flex-col bg-white ${
          matchMediaQuery ? "w-[800px] h-[70%] rounded-md" : "w-full h-full"
        }`}
      >
        <ModalNewPublicationHeader></ModalNewPublicationHeader>

        {modalContextStore?.previewSrc ? (
          <div
            className={`flex w-full h-full items-start justify-center bg-white ${
              matchMediaQuery ? "flex-row" : "flex-col"
            }`}
          >
            <img
              src={modalContextStore?.previewSrc}
              alt={modalContextStore?.previewSrc}
              className={`h-full object-contain bg-[#1A1A1A] ${
                matchMediaQuery ? "w-4/6" : "w-full"
              }`}
            ></img>

            <form
              className={`flex flex-col h-full p-2 ${
                matchMediaQuery ? "w-2/6" : "w-full"
              }`}
            >
              <div className="flex items-center justify-between w-8 h-auto">
                <UserImage
                  className="rounded-full mr-2 w-8 h-8"
                  avatar={authContextStore?.user.avatar!}
                  name={authContextStore?.user.name!}
                ></UserImage>
                <h3 className="text-black">
                  {authContextStore?.user.username}
                </h3>
              </div>

              <textarea
                value={publicationContextStore?.formState.description}
                name="description"
                onChange={publicationContextStore?.onInputChangeTextArea}
                className="outline-none w-full resize-none mt-4 shadow-sm"
                rows={5}
                placeholder="Escribe una descripcion..."
              ></textarea>
            </form>
          </div>
        ) : (
          <ModalNewPublicationUpload></ModalNewPublicationUpload>
        )}
      </div>
    </div>
  );
};
