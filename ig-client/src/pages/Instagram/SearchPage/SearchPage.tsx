import { useState, useContext, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FooterMobile } from "../../../components/Footer/Mobile/FooterMobile";
import { InputText } from "../../../components/Input/InputText/InputText";
import { NavBarMobile } from "../../../components/NavBar/Mobile/NavBarMobile";
import { SearchList } from "../../../components/Search/SearchList";
import { ExploreContext } from "../../../contexts/Explore/ExploreContext";
import { SearchContext } from "../../../contexts/Search/SearchContext";
import { useSearchWithAuth } from "../../../hooks/useSearchWithAuth";
import { PublicationImages } from "../../../components/PublicationsImages/PublicationImages";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const searchContextStore = useContext(SearchContext);
  const exploreContextStore = useContext(ExploreContext);
  const { matchMediaQuery } = useMediaMatch(1024);
  const navigate = useNavigate();
  useSearchWithAuth();

  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  useEffect(() => {
    searchContextStore?.setActiveSearch(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!focus) {
      exploreContextStore?.getExplore();
    }
  }, [focus]);

  useEffect(() => {
    if (!focus && matchMediaQuery) {
      navigate("/explore");
    }
  }, [matchMediaQuery]);

  return (
    <>
      <NavBarMobile
        classNameHeader={
          "flex flex-row items-center justify-start h-14 w-screen shadow-md mb-1 fixed bg-white"
        }
        classNameNav={
          "flex flex-row items-center justify-start h-full w-full p-2"
        }
      >
        {focus && (
          <BsArrowLeft
            color="black"
            size={25}
            onClick={() => {
              setFocus(false);
              searchContextStore?.onResetForm();
            }}
          ></BsArrowLeft>
        )}
        <InputText
          id="query"
          onFocus={onFocus}
          placeholder="Buscar..."
          value={searchContextStore?.formState.query!}
          name="query"
          onChange={searchContextStore?.onInputChange!}
          label=""
          classNameInput=" bg-gray-200 rounded-full mx-3 p-1 pl-2 w-full outline-none"
        ></InputText>
      </NavBarMobile>

      {focus && (
        <main className="flex flex-col w-full h-auto items-start justify-center px-3 mt-14">
          <SearchList
            className="flex flex-row flex-wrap w-full h-auto"
            title="Recientes"
            outTitle={true}
            users={searchContextStore?.filterUsers!}
          ></SearchList>
        </main>
      )}

      {!focus && (
        <PublicationImages
          publications={exploreContextStore?.explore!}
          context="explore"
        ></PublicationImages>
      )}

      <FooterMobile></FooterMobile>
    </>
  );
};
