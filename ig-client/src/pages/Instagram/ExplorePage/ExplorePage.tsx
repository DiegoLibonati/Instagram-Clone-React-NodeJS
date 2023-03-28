import { useContext, useEffect } from "react";
import { ModalPublication } from "../../../components/Modal/ModalPublication/ModalPublication";
import { PublicationImages } from "../../../components/PublicationsImages/PublicationImages";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { ExploreContext } from "../../../contexts/Explore/ExploreContext";
import { UIContext } from "../../../contexts/Ui/UIContext";

export const ExplorePage = () => {
  const { modal } = useContext(UIContext);
  const { explore, getExplore } = useContext(ExploreContext);

  useEffect(() => {
    getExplore();
  }, []);
  return (
    <>
      <Sidebar></Sidebar>

      <main className="flex min-h-screen w-[80%] absolute right-0 justify-center items-start px-32 2xl:px-0">
        <PublicationImages
          publications={explore}
          context="explore"
        ></PublicationImages>
      </main>

      {modal.isOpen && modal.type === "publication" && (
        <ModalPublication></ModalPublication>
      )}
    </>
  );
};
