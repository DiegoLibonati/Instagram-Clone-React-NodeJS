import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMediaMatch } from "../../hooks/useMediaMatch";

interface SearchContextProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<null | any>(null);

export const SearchProvider: React.FunctionComponent<SearchContextProps> = ({
  children,
}) => {
  const [activeSearch, setActiveSearch] = useState(false);

  const [filterUsers, setFilterUsers] = useState([]);
  const { matchMediaQuery } = useMediaMatch(1024);

  const location = useLocation();
  const navigate = useNavigate();

  const { formState, onInputChange, onResetForm } = useForm({
    query: "",
  });

  useEffect(() => {
    if (activeSearch) {
      onResetForm();
      setActiveSearch(false);
    }
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    if (matchMediaQuery && activeSearch) {
      navigate("/");
      setActiveSearch(true);
    }

    if (!matchMediaQuery && activeSearch) {
      navigate("/search-page");
    }
    // eslint-disable-next-line
  }, [matchMediaQuery]);
  return (
    <SearchContext.Provider
      value={{
        filterUsers,
        formState,
        activeSearch,
        setActiveSearch,
        onInputChange,
        onResetForm,
        setFilterUsers,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
