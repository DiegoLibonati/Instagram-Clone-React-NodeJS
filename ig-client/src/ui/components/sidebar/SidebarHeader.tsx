import { InstagramWhite } from "../../../assets/images";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-start w-full h-40 pl-6">
      <img
        className="w-28 h-auto object-cover"
        src={InstagramWhite}
        alt="instagram"
      ></img>
    </div>
  );
};
