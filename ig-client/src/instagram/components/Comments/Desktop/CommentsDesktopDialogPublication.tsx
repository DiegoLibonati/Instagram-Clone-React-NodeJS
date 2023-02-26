import { UserImage } from "../../UserImage/UserImage";

export const CommentsDesktopDialogPublication = () => {
  return (
    <div className="flex items-start justify-start flex-row w-auto h-auto">
      <UserImage className="rounded-full mr-4 h-8 w-8"></UserImage>
      <div className="flex items-start justify-start flex-col w-[80%] h-auto">
        <p className="text-black text-sm ">
          <span className="font-medium">pythoncodess</span> Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Eligendi totam voluptatum
          quibusdam pariatur. Vero in consequuntur repellat, corrupti provident
          beatae.
        </p>
        <p className="text-gray-400 text-xs mt-1">4 d</p>
      </div>
    </div>
  );
};
