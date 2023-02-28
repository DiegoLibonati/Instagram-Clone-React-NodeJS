import { SlOptionsVertical } from "react-icons/sl";
import { UserImage } from "../UserImage/UserImage";

export const PublicationHeader = () => {
  return (
    <div className="flex items-center justify-between p-2 w-full h-auto">
      <div className="flex items-center justify-between w-8 h-auto">
        <UserImage className="rounded-full mr-2" avatar="" name=""></UserImage>
        <h3 className="text-black">die_libonati</h3>
      </div>

      <SlOptionsVertical color="black" size={25}></SlOptionsVertical>
    </div>
  );
};
