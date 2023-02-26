import { UserImage } from "../UserImage/UserImage";

export const PublicationForm = () => {
  return (
    <div className="flex items-center justify-start w-full h-auto px-2 my-[2px]">
      <UserImage className="rounded-full mr-2 w-6"></UserImage>
      <input
        placeholder="Agrega un comentario..."
        className="bg-transparent placeholder:text-gray-500 border-none outline-none text-black"
      ></input>
    </div>
  );
};
