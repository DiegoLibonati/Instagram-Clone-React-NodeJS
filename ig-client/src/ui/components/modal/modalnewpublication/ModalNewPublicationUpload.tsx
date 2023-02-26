import { BsImages } from "react-icons/bs";
import { InputFile } from "../../Input/InputFile";

export const ModalNewPublicationUpload = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center m-auto">
      <BsImages size={75} className=""></BsImages>
      <h2 className="mt-2 text-md">Sube fotos o videos aqui</h2>
      <InputFile
        classNameLabel="bg-blue-500 px-2 py-1 text-white mt-2 rounded-full cursor-pointer"
        label="Seleccionar desde tu dispositivo"
      ></InputFile>
    </div>
  );
};
