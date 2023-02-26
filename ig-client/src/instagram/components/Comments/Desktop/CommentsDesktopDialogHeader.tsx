import { FiMoreHorizontal } from "react-icons/fi";
import { UserImage } from "../../UserImage/UserImage";

export const CommentsDesktopDialogHeader = () => {
  return (
    <div className="flex items-center justify-start flex-row w-full h-14 shadow-slate-300 shadow-sm p-2">
      <UserImage className="rounded-full mr-2 h-8 w-8"></UserImage>
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
