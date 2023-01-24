import { MdOutlineAddBox } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

export const NavBarMobile = () => {
  return (
    <header className="lg:hidden fixed p-2 bg-black w-full top-0">
      <nav className="flex items-center justify-between flex-row w-full h-auto">
        <div className="inline-block bg-logos bg-cover bg-no-repeat bg-instagramLogoWhite w-40 h-14"></div>

        <div className="flex items-center justify-between flex-row">
          <MdOutlineAddBox
            color="white"
            size={25}
            className="mx-2"
          ></MdOutlineAddBox>
          <BsSuitHeart color="white" size={25} className="mx-2"></BsSuitHeart>
          <AiOutlineMessage
            color="white"
            size={25}
            className="mx-2"
          ></AiOutlineMessage>
        </div>
      </nav>
    </header>
  );
};
