import { ModalPublicationActions } from "./ModalPublicationActions";
import { ModalPublicationImage } from "./ModalPublicationImage";
import { ModalPublicationInformation } from "./ModalPublicationInformation";

export const ModalPublicationContainer = () => {
  return (
    <div className="flex items-center justify-center flex-row w-[75%] h-[90%] bg-black shadow-md contain-content">
      <ModalPublicationImage></ModalPublicationImage>

      <ModalPublicationInformation></ModalPublicationInformation>

      <ModalPublicationActions></ModalPublicationActions>
    </div>
  );
};
