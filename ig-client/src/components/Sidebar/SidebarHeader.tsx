import { Link } from "react-router-dom";
import { InstagramBlack } from "../../assets/Global/images";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-start w-full h-40 pl-6">
      <Link to="/">
        <img
          className="w-32 h-auto object-cover"
          src={InstagramBlack}
          alt="instagram"
        ></img>
      </Link>
    </div>
  );
};
