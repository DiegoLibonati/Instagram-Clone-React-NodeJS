import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import { FooterMobile } from "../../ui/components/FooterMobile";
import { NavBarMobile } from "../../ui/components/NavBarMobile";
import { Sidebar } from "../../ui/components/sidebar/Sidebar";
import { CommentsDesktop } from "../components/feed/comments/commentsdesktop/CommentsDesktop";
import { CommentsMobile } from "../components/feed/comments/commentsmobile/CommentsMobile";
import { Feed } from "../components/feed/Feed";
import { Suggetions } from "../components/suggestions/Suggetions";

export const HomePage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const { modal } = useContext(UIContext);

  return (
    <>
      <NavBarMobile></NavBarMobile>
      {matchMediaQuery && <Sidebar></Sidebar>}

      <main className="mt-14 mb-14 bg-white flex items-center justify-start flex-col w-screen h-auto lg:min-h-screen lg:m-0 lg:pt-8 lg:flex-row lg:w-[80%] lg:absolute lg:right-0 lg:justify-center lg:items-start">
        <Feed></Feed>

        {matchMediaQuery && <Suggetions></Suggetions>}
      </main>

      {!matchMediaQuery && modal.isOpen && <CommentsMobile></CommentsMobile>}
      {matchMediaQuery && modal.isOpen && <CommentsDesktop></CommentsDesktop>}

      <FooterMobile></FooterMobile>
    </>
  );
};
