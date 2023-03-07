import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SearchContextProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<null | any>(null);

export const SearchProvider: React.FunctionComponent<SearchContextProps> = ({
  children,
}) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (activeSearch) {
      setActiveSearch(false);
    }
  }, [location]);
  return (
    <SearchContext.Provider value={{ activeSearch, setActiveSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
