import { InstagramBlack } from "../../../assets/images";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-start w-full h-40 pl-6">
      <img
        className="w-32 h-auto object-cover"
        src={InstagramBlack}
        alt="instagram"
      ></img>
    </div>
  );
};
