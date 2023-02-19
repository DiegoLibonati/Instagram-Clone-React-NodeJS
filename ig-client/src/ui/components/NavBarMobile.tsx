import { MdOutlineAddBox } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { InstagramBlack } from "../../assets/images";
import { Link } from "react-router-dom";
import { UIContext } from "../../contexts/UIContext";
import { useContext } from "react";

export const NavBarMobile = () => {
  const { setModalOpen } = useContext(UIContext);
  return (
    <header className="lg:hidden fixed bg-white w-screen top-0 z-[9999999]">
      <nav className="flex items-center justify-between flex-row w-full p-2 h-14">
        <Link to="/">
          <img
            src={InstagramBlack}
            alt="instagram"
            className="w-28 h-auto object-cover"
          ></img>
        </Link>

        <div className="flex items-center justify-between flex-row">
          <MdOutlineAddBox
            color="black"
            size={25}
            className="mx-2"
            onClick={() => setModalOpen("newpublication")}
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
