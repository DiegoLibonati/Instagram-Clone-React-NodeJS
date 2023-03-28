import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { instagramApiGetExplore } from "../../api/Explore/instagramApiGetExplore";

interface ExploreContextProps {
  children: React.ReactNode;
}

export const ExploreContext = createContext<null | any>(null);

export const ExploreProvider: React.FunctionComponent<ExploreContextProps> = ({
  children,
}) => {
  const [explore, setExplore] = useState([]);
  const [isOpenAnyImageFromExplore, setIsOpenAnyImageFromExplore] =
    useState(false);
  const location = useLocation();
  const getExplore = async () => {
    const request = await instagramApiGetExplore();

    const payload = await request.payload;

    setExplore(payload);
  };

  useEffect(() => {
    if (explore?.length > 0) {
      setExplore([]);
    }

    if (!location.pathname.startsWith("/p/") && isOpenAnyImageFromExplore)
      return setIsOpenAnyImageFromExplore(false);
  }, [location]);

  return (
    <ExploreContext.Provider
      value={{
        explore,
        isOpenAnyImageFromExplore,
        getExplore,
        setIsOpenAnyImageFromExplore,
      }}
    >
      {children}
    </ExploreContext.Provider>
  );
};
