import { BsSuitHeart, BsChat, BsArchive } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

export const PublicationActions = () => {
  return (
    <div className="flex items-center justify-between w-full p-2 h-auto my-[2px]">
      <div className="flex items-center justify-between h-auto">
        <BsSuitHeart color="black" size={25} className="mr-4"></BsSuitHeart>
        <BsChat color="black" size={25} className="mr-4"></BsChat>
        <FiSend color="black" size={25} className="mr-4"></FiSend>
      </div>
      <BsArchive color="black" size={25}></BsArchive>
    </div>
  );
};
