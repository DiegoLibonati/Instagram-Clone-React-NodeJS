import { BiError } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { UIContext } from "../../../contexts/Ui/UIContext";

export const ModalAlert = (): JSX.Element => {
  const uiContextStore = useContext(UIContext);

  const { type, title, message, color } = uiContextStore?.alert!;

  const iconColor = color === "bg-green-600" ? "green" : "red";

  return (
    <div className="flex flex-row items-center justify-start w-screen h-32 shadow-lg fixed bottom-0 bg-white p-2 z-[9999999999] md:w-[32rem] md:h-28 md:top-2 md:right-2 md:rounded-md">
      <div className={`w-2 h-full ${color} md:w-1`}></div>
      {type === "error" && (
        <BiError size={25} color={iconColor} className="ml-2"></BiError>
      )}
      {type === "success" && (
        <BsCheckCircle
          size={25}
          color={iconColor}
          className="ml-2"
        ></BsCheckCircle>
      )}
      <div className="flex flex-col items-start justify-center ml-2 px-2">
        <h2 className="font-bold text-sm">{title}</h2>
        <p className="text-xs text-gray-600">{message}</p>
      </div>
      <MdClose
        size={20}
        color="gray"
        className="cursor-pointer absolute right-1"
        onClick={() => uiContextStore?.setAlertClose()}
      ></MdClose>
    </div>
  );
};
