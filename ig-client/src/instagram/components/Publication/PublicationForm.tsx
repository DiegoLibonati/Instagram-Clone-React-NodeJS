import { AuthContext } from "../../../contexts/AuthContext";
import { UserImage } from "../UserImage/UserImage";
import { useContext } from "react";

export const PublicationForm = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-start w-full h-auto px-2 my-[2px]">
      <UserImage
        className="rounded-full mr-2 w-6 h-6"
        avatar={user.avatar}
        name={user.name}
      ></UserImage>
      <input
        placeholder="Agrega un comentario..."
        className="bg-transparent placeholder:text-gray-500 border-none outline-none text-black"
      ></input>
    </div>
  );
};
