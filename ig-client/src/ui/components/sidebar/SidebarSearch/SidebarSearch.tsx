import { BsArrowLeft } from "react-icons/bs";
import { SearchContext } from "../../../../contexts/SearchContext";
import { SearchList } from "../../../../instagram/components/Search/SearchList";
import { InputText } from "../../Input/InputText";
import { useContext } from "react";

export const SidebarSearch = () => {
  const { setActiveSearch } = useContext(SearchContext);

  return (
    <form className="flex flex-col items-start justify-center w-[calc(100%-16px)] h-screen m-2 shadow-sm rounded-md">
      <div className="flex flex-row w-full h-16 items-center justify-start p-2">
        <BsArrowLeft
          size={25}
          className="cursor-pointer"
          onClick={() => setActiveSearch(false)}
        ></BsArrowLeft>
        <InputText
          id="query"
          placeholder="Buscar..."
          name="query"
          value=""
          classNameInput="ml-2 w-full bg-gray-200 rounded-full p-1 px-2 outline-none"
          onChange={(e) => {}}
        ></InputText>
      </div>

      <SearchList
        inTitle={true}
        title="Recientes"
        className="flex flex-col items-start w-full h-full overflow-y-scroll p-2"
      ></SearchList>
    </form>
  );
};
