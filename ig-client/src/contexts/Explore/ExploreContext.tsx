import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instagramApiGetExplore } from "../../api/Explore/instagramApiGetExplore";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import {
  ExploreContextProps,
  ExploreContextT,
  Publication,
} from "../../types/types";

export const ExploreContext = createContext<ExploreContextT | null>(null);

export const ExploreProvider: React.FunctionComponent<ExploreContextProps> = ({
  children,
}) => {
  const [explore, setExplore] = useState<Publication[]>([]);
  const [imageOpenFromExplore, setImageOpenFromExplore] =
    useState<boolean>(false);
  const { matchMediaQuery } = useMediaMatch(1024);
  const location = useLocation();
  const navigate = useNavigate();

  const getExplore = async (): Promise<void> => {
    const request = await instagramApiGetExplore();

    const payload: Publication[] = await request.payload;

    setExplore(payload);
  };

  useEffect(() => {
    if (explore?.length > 0) {
      setExplore([]);
    }

    if (!location.pathname.startsWith("/p/") && imageOpenFromExplore)
      return setImageOpenFromExplore(false);
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
        imageOpenFromExplore,
        getExplore,
        setImageOpenFromExplore,
      }}
    >
      {children}
    </ExploreContext.Provider>
  );
};
