import { ModalPublicationComments } from "./ModalPublicationComments";
import { ModalPublicationDescription } from "./ModalPublicationDescription";
import { ModalPublicationHeader } from "./ModalPublicationHeader";

export const ModalPublicationInformation = (): JSX.Element => {
  return (
    <>
      <div className="flex items-start justify-start flex-col w-2/6 h-full relative bg-white shadow-slate-300 shadow-sm overflow-y-scroll overflow-x-hidden no-scrollbar">
        <ModalPublicationHeader></ModalPublicationHeader>

        <div className="flex items-start justify-center flex-col w-full h-auto p-2 mt-2 mb-40">
          <ModalPublicationDescription></ModalPublicationDescription>
          <ModalPublicationComments></ModalPublicationComments>
        </div>
      </div>
    </>
  );
};
