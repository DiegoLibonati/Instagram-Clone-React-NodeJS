import { useContext } from "react";
import { BsChat, BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../../contexts/UIContext";
import { useMediaMatch } from "../../../hooks/useMediaMatch";

export const ProfileImage = () => {
  const { setModalOpen } = useContext(UIContext);
  const { matchMediaQuery } = useMediaMatch(1024);
  const navigate = useNavigate();
  return (
    <div
      className="relative group h-32 md:h-48 2xl:h-72 w-full cursor-pointer"
      onClick={() => {
        if (matchMediaQuery) setModalOpen("publication");
        else navigate("/die_libonati/123123142");
      }}
    >
      <div className="opacity-0 group-hover:opacity-75 duration-300 absolute inset-x-0 h-full flex justify-evenly items-center text-xl bg-neutral-800 text-black font-semibold">
        <p className="text-white text-center">
          <BsSuitHeart color="white" size={25}></BsSuitHeart>
          32
        </p>
        <p className="text-white text-center">
          <BsChat color="white" size={25}></BsChat>22
        </p>
      </div>

      <img
        src="https://www.imagineforest.com/blog/wp-content/uploads/2021/12/asian-woman-5450041_640.jpg"
        alt="paisaje"
        className="w-full h-full object-cover"
      ></img>
    </div>
  );
};
