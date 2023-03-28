import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instagramApiGetExplore } from "../../api/Explore/instagramApiGetExplore";
import { useMediaMatch } from "../../hooks/useMediaMatch";

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
  const { matchMediaQuery } = useMediaMatch(1024);
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!matchMediaQuery && location.pathname === "/explore") {
      navigate("/search-page");
    }
  }, [matchMediaQuery, location.pathname]);
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
