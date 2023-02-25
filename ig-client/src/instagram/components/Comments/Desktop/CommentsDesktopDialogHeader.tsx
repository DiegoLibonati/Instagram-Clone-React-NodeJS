import { FiMoreHorizontal } from "react-icons/fi";

export const CommentsDesktopDialogHeader = () => {
  return (
    <div className="flex items-center justify-start flex-row w-full h-14 shadow-slate-300 shadow-sm p-2">
      <img
        src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
        alt="perfil"
        className="rounded-full mr-2 h-8 w-8"
      ></img>
      <h2 className="text-black font-medium text-sm mr-2">pythoncodess</h2>
      <button className="text-blue-700 text-sm cursor-pointer">Seguir</button>
      <FiMoreHorizontal
        size={25}
        color="black"
        className="absolute right-4 cursor-pointer"
      ></FiMoreHorizontal>
    </div>
  );
};
