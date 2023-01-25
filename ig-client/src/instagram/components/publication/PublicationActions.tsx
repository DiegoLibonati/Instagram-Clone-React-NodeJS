import { BsSuitHeart, BsChat, BsArchive } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

export const PublicationActions = () => {
  return (
    <div className="flex items-center justify-between w-full p-2 h-auto">
      <div className="flex items-center justify-between h-auto">
        <BsSuitHeart color="white" size={25} className="mr-4"></BsSuitHeart>
        <BsChat color="white" size={25} className="mr-4"></BsChat>
        <FiSend color="white" size={25} className="mr-4"></FiSend>
      </div>
      <BsArchive color="white" size={25}></BsArchive>
    </div>
  );
};
