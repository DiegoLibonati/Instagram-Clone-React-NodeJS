import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { UIContext } from "../../../contexts/Ui/UIContext";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";

export const ModalNewPublicationHeader = (): JSX.Element => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const uiContextStore = useContext(UIContext)!;
  const authContextStore = useContext(AuthContext)!;
  const publicationContextStore = useContext(PublicationContext)!;
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-2 h-14 flex-row w-full shadow-md">
      {!matchMediaQuery && (
        <AiOutlineClose
          size={20}
          className="cursor-pointer"
          onClick={uiContextStore?.setModalClose}
        ></AiOutlineClose>
      )}
      <h2 className={`font-medium text-md ${matchMediaQuery && "pl-3"}`}>
        Nueva publicación
      </h2>
      <BsArrowRight
        size={20}
        className="text-blue-500 cursor-pointer"
        onClick={async () => {
          const request = await publicationContextStore?.handleNewPublication();

          uiContextStore?.setModalClose();
          authContextStore?.onLogin({
            ...authContextStore?.user,
            publications: [
              ...authContextStore?.user.publications,
              request.publication,
            ],
          });
          uiContextStore?.setAlertOpen(
            "success",
            "¡Bien, todo esta ok!",
            request.message,
            "bg-green-600"
          );
          navigate(`/${authContextStore?.user.username}`);
        }}
      ></BsArrowRight>
    </div>
  );
};
