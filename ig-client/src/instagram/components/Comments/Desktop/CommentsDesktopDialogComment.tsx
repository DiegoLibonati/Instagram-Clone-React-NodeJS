import { BsSuitHeart } from "react-icons/bs";
import { UserImage } from "../../UserImage/UserImage";

export const CommentsDesktopDialogComment = () => {
  return (
    <li className="flex items-start justify-start flex-row w-full h-auto mb-6">
      <UserImage
        className="rounded-full mr-4 h-8 w-8"
        avatar=""
        name=""
      ></UserImage>
      <div className="flex items-start justify-start flex-col w-[80%] h-auto">
        <p className="text-black text-sm">
          <span className="font-medium">die_libonati</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Obcaecati non id placeat
          libero explicabo, suscipit minima nesciunt officiis perferendis illo
          inventore voluptates nihil impedit sapiente incidunt enim adipisci et.
          Repudiandae.
        </p>
        <div className="flex flex-row items-start justify-start w-full h-auto mt-1">
          <p className="text-xs text-gray-400 mr-2">7 d</p>
          <button className="text-xs text-gray-400 font-medium">
            7 Me gusta
          </button>
        </div>
      </div>
      <BsSuitHeart color="black" size={13} className="mt-4 ml-4"></BsSuitHeart>
    </li>
  );
};
