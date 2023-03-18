import { BsSuitHeart } from "react-icons/bs";
import { UserImage } from "../../UserImage/UserImage";

export const CommentsMobileComment = () => {
  return (
    <li className="flex items-start justify-start flex-row w-full h-auto p-2">
      <UserImage
        className="rounded-full mr-2 h-8 w-8"
        avatar=""
        name=""
      ></UserImage>
      <div className="flex items-start justify-start flex-col w-full h-auto">
        <div className="flex items-center justify-start flex-row w-full h-auto">
          <h3 className="text-black mr-2 text-sm font-bold">die_libonati</h3>
          <h4 className="text-gray-400 text-xs">1 d</h4>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          delectus aut veritatis magni cupiditate hic accusantium id molestiae,
          porro excepturi.
        </p>
      </div>
      <BsSuitHeart className="self-center"></BsSuitHeart>
    </li>
  );
};
