import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { RxVideo } from "react-icons/rx";
import { Link } from "react-router-dom";

export const FooterMobile = () => {
  return (
    <footer className="lg:hidden flex items-center justify-between fixed bg-white w-screen bottom-0 p-2 h-14">
      <AiOutlineHome color="black" size={25}></AiOutlineHome>
      <AiOutlineSearch color="black" size={25}></AiOutlineSearch>
      <RxVideo color="black" size={25}></RxVideo>
      <AiOutlineShopping color="black" size={25}></AiOutlineShopping>
      <Link to="/">
        <img
          className="w-6 h-6 object-cover rounded-full"
          src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
          alt="perfil"
        ></img>
      </Link>
    </footer>
  );
};
