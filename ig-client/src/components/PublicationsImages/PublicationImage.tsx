import { useContext } from "react";
import { BsChat, BsSuitHeart } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { ExploreContext } from "../../contexts/Explore/ExploreContext";
import { PublicationContext } from "../../contexts/Publications/PublicationContext";
import { UIContext } from "../../contexts/Ui/UIContext";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import { Publication } from "../../types/types";

export const PublicationImage = ({
  id,
  imgLink,
  likes,
  comments,
  description,
  date,
  username,
  avatar,
  name,
}: Publication): JSX.Element => {
  const uiContextStore = useContext(UIContext);
  const publicationContextStore = useContext(PublicationContext);
  const exploreContextStore = useContext(ExploreContext);
  const { matchMediaQuery } = useMediaMatch(1024);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className="relative group h-32 md:h-48 2xl:h-72 w-full cursor-pointer"
      onClick={() => {
        if (matchMediaQuery) {
          publicationContextStore?.setActivePublication({
            _id: id,
            imgLink,
            likes,
            comments,
            description,
            date,
            username,
            avatar,
            name,
          });
          return uiContextStore?.setModalOpen("publication");
        }

        if (location.pathname.startsWith("/search-page")) {
          exploreContextStore?.setImageOpenFromExplore(true);
        }

        return navigate(`/p/${username}`);
      }}
    >
      <div className="opacity-0 group-hover:opacity-75 duration-300 absolute inset-x-0 h-full flex justify-evenly items-center text-xl bg-neutral-800 text-black font-semibold">
        <p className="text-white text-center">
          <BsSuitHeart color="white" size={25}></BsSuitHeart>
          {likes?.length}
        </p>
        <p className="text-white text-center">
          <BsChat color="white" size={25}></BsChat>
          {comments?.length}
        </p>
      </div>

      <img
        src={imgLink}
        alt={name}
        className="w-full h-full object-cover"
      ></img>
    </div>
  );
};
