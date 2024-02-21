import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/Search/SearchContext";
import { InputText } from "../../Input/InputText/InputText";
import { SearchList } from "../../Search/SearchList";
import { useSearchWithAuth } from "../../../hooks/useSearchWithAuth";

export const SidebarSearch = (): JSX.Element => {
  const searchContextStore = useContext(SearchContext);

  useSearchWithAuth();

  return (
    <form className="flex flex-col items-start justify-center w-[calc(100%-16px)] h-screen m-2 shadow-sm rounded-md">
      <div className="flex flex-row w-full h-16 items-center justify-start p-2">
        <BsArrowLeft
          size={25}
          className="cursor-pointer"
          onClick={() => {
            searchContextStore?.setActiveSearch(false);
            searchContextStore?.onResetForm();
          }}
        ></BsArrowLeft>
        <InputText
          id="query"
          placeholder="Buscar..."
          name="query"
          value={searchContextStore?.formState.query!}
          classNameInput="ml-2 w-full bg-gray-200 rounded-full p-1 px-2 outline-none"
          onChange={searchContextStore?.onInputChange!}
        ></InputText>
      </div>

      <SearchList
        inTitle={true}
        title="Recientes"
        className="flex flex-col items-start w-full h-full overflow-y-scroll p-2"
        users={searchContextStore?.filterUsers!}
      ></SearchList>
    </form>
  );
};
