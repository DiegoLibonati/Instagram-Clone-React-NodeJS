import { useContext } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { InstagramBlack } from "../../assets/images";
import { UIContext } from "../../contexts/UIContext";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import { FooterMobile } from "../../ui/components/Footer/Mobile/FooterMobile";
import { NavBarMobile } from "../../ui/components/NavBar/Mobile/NavBarMobile";
import { Sidebar } from "../../ui/components/Sidebar/Sidebar";
import { CommentsDesktop } from "../components/feed/comments/commentsdesktop/CommentsDesktop";
import { CommentsMobile } from "../components/feed/comments/commentsmobile/CommentsMobile";
import { Feed } from "../components/feed/Feed";
import { Suggetions } from "../components/suggestions/Suggetions";

export const HomePage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const { modal, setModalOpen } = useContext(UIContext);

  return (
    <>
      <NavBarMobile
        classNameHeader={"lg:hidden fixed bg-white w-screen top-0 z-[9999999]"}
        classNameNav={
          "flex items-center justify-between flex-row w-full p-2 h-14"
        }
      >
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
      </NavBarMobile>
      {matchMediaQuery && <Sidebar></Sidebar>}

      <main className="mt-14 mb-14 bg-white flex items-center justify-start flex-col w-screen h-auto lg:min-h-screen lg:m-0 lg:pt-8 lg:flex-row lg:w-[80%] lg:absolute lg:right-0 lg:justify-center lg:items-start">
        <Feed></Feed>

        {matchMediaQuery && <Suggetions></Suggetions>}
      </main>

      {!matchMediaQuery && <CommentsMobile></CommentsMobile>}
      {matchMediaQuery && modal.isOpen && modal.type === "publication" && (
        <CommentsDesktop></CommentsDesktop>
      )}

      <FooterMobile></FooterMobile>
    </>
  );
};
