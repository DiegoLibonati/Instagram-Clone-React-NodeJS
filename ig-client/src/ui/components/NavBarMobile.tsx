import { MdOutlineAddBox } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { InstagramBlack } from "../../assets/images";

export const NavBarMobile = () => {
  return (
    <header className="lg:hidden fixed bg-white w-full top-0">
      <nav className="flex items-center justify-between flex-row w-full p-2 h-14">
        <img
          src={InstagramBlack}
          alt="instagram"
          className="w-28 h-auto object-cover"
        ></img>

        <div className="flex items-center justify-between flex-row">
          <MdOutlineAddBox
            color="black"
            size={25}
            className="mx-2"
          ></MdOutlineAddBox>
          <BsSuitHeart color="black" size={25} className="mx-2"></BsSuitHeart>
          <AiOutlineMessage
            color="black"
            size={25}
            className="mx-2"
          ></AiOutlineMessage>
        </div>
      </nav>
    </header>
  );
};
