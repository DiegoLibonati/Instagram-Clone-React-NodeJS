import { BsImages } from "react-icons/bs";
import { UIContext } from "../../../../contexts/UIContext";
import { useContext } from "react";

export const ModalNewPublicationUpload = () => {
  const { setPreviewSrc } = useContext(UIContext);

  return (
    <div className="flex flex-col w-full justify-center items-center m-auto">
      <BsImages size={75} className=""></BsImages>
      <h2 className="mt-2 text-md">Sube fotos o videos aqui</h2>
      <label
        htmlFor="input-file"
        className="bg-blue-500 px-2 py-1 text-white mt-2 rounded-full cursor-pointer"
      >
        Seleccionar desde tu dispositivo
      </label>
      <input
        type="file"
        id="input-file"
        hidden
        onChange={(e) =>
          setPreviewSrc(URL.createObjectURL(e.target!.files![0]))
        }
      />
    </div>
  );
};
