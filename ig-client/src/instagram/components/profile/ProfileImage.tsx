import { BsChat, BsSuitHeart } from "react-icons/bs";

export const ProfileImage = () => {
  return (
    <div className="relative group h-32 md:h-48 2xl:h-72 w-full">
      <div className="opacity-0 group-hover:opacity-75 duration-300 absolute inset-x-0 h-full flex justify-evenly items-center text-xl bg-gray-500 text-black font-semibold">
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
