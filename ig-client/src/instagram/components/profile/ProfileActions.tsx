import { GrGrid } from "react-icons/gr";
import { RxVideo } from "react-icons/rx";
import { BsPersonSquare } from "react-icons/bs";
import { useMediaMatch } from "../../../hooks/useMediaMatch";

export const ProfileActions = () => {
  const { matchMediaQuery } = useMediaMatch(1024);

  return (
    <section className="flex items-center justify-between flex-row w-full h-auto mt-1 mb-2 2xl:mt-5 2xl:border-t-[1px] 2xl:shadow-sm 2xl:w-[75%]">
      <div className="flex items-center justify-center w-1/3 h-10">
        <GrGrid size={25} color="black"></GrGrid>
        {matchMediaQuery && <h3 className="ml-2">Publicaciones</h3>}
      </div>
      <div className="flex items-center justify-center w-1/3 h-10">
        <RxVideo size={25} color="black"></RxVideo>
        {matchMediaQuery && <h3 className="ml-2">Guardado</h3>}
      </div>
      <div className="flex items-center justify-center w-1/3 h-10">
        <BsPersonSquare size={25} color="black"></BsPersonSquare>
        {matchMediaQuery && <h3 className="ml-2">Etiquetadas</h3>}
      </div>
    </section>
  );
};
