import { useContext } from "react";
import { BsChat, BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../../contexts/UIContext";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { Publication } from "../../../types/types";

export const ProfileImage = ({
  imgLink,
  countLikes,
  countComments,
}: Publication) => {
  const { setModalOpen } = useContext(UIContext);
  const { matchMediaQuery } = useMediaMatch(1024);
  const navigate = useNavigate();
  return (
    <div
      className="relative group h-32 md:h-48 2xl:h-72 w-full cursor-pointer"
      onClick={() => {
        if (matchMediaQuery) setModalOpen("publication");
        else navigate("/p/123123142");
      }}
    >
      <div className="opacity-0 group-hover:opacity-75 duration-300 absolute inset-x-0 h-full flex justify-evenly items-center text-xl bg-neutral-800 text-black font-semibold">
        <p className="text-white text-center">
          <BsSuitHeart color="white" size={25}></BsSuitHeart>
          {countLikes}
        </p>
        <p className="text-white text-center">
          <BsChat color="white" size={25}></BsChat>
          {countComments}
        </p>
      </div>

      <img
        src={imgLink}
        alt="paisaje"
        className="w-full h-full object-cover"
      ></img>
    </div>
  );
};
