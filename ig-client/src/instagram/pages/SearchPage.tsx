import { useState, useContext, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { instagramApiGetUsers } from "../../api/instagramApiGetUsers";
import { SearchContext } from "../../contexts/SearchContext";
import { FooterMobile } from "../../ui/components/Footer/Mobile/FooterMobile";
import { InputText } from "../../ui/components/Input/InputText";
import { NavBarMobile } from "../../ui/components/NavBar/Mobile/NavBarMobile";
import { SearchList } from "../components/Search/SearchList";

export const SearchPage = () => {
  const {
    filterUsers,
    formState,
    onInputChange,
    onResetForm,
    setActiveSearch,
    setFilterUsers,
  } = useContext(SearchContext);
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const getUsers = async () => {
    const request = await instagramApiGetUsers(formState.query);

    const { users } = request;
    setFilterUsers(users);
  };

  useEffect(() => {
    if (formState.query) {
      getUsers();
    } else {
      setFilterUsers([]);
    }
  }, [formState.query]);

  useEffect(() => {
    setActiveSearch(true);
  }, []);

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
              onResetForm();
            }}
          ></BsArrowLeft>
        )}
        <InputText
          id="query"
          onFocus={onFocus}
          placeholder="Buscar..."
          value={formState.query}
          name="query"
          onChange={onInputChange}
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
            users={filterUsers}
          ></SearchList>
        </main>
      )}

      <FooterMobile></FooterMobile>
    </>
  );
};
