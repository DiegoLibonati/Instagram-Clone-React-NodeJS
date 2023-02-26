import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { RxVideo } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useContext } from "react";
import { UserImage } from "../../../../instagram/components/UserImage/UserImage";

export const FooterMobile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <footer className="lg:hidden flex items-center justify-between fixed bg-white w-screen bottom-0 p-2 h-14">
      <AiOutlineHome
        color="black"
        size={25}
        onClick={() => navigate("/")}
      ></AiOutlineHome>
      <AiOutlineSearch color="black" size={25}></AiOutlineSearch>
      <RxVideo color="black" size={25}></RxVideo>
      <AiOutlineShopping color="black" size={25}></AiOutlineShopping>
      <Link to={`/${user.username}`}>
        <UserImage className="w-6 h-6 object-cover rounded-full"></UserImage>
      </Link>
    </footer>
  );
};
