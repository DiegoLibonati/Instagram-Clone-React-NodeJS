import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { instagramApiGetFeed } from "../../api/Feed/instagramApiGetFeed";
import { Publication } from "../../types/types";

interface FeedContextProps {
  children: React.ReactNode;
}

export const FeedContext = createContext<null | any>(null);

export const FeedProvider: React.FunctionComponent<FeedContextProps> = ({
  children,
}) => {
  const [feed, setFeed] = useState<Publication[]>([]);
  const location = useLocation();

  const getFeed = async () => {
    const request = await instagramApiGetFeed();

    const { payload } = request;

    setFeed(payload);
  };

  useEffect(() => {
    setFeed([]);
  }, [location]);

  return (
    <FeedContext.Provider value={{ feed, setFeed, getFeed }}>
      {children}
    </FeedContext.Provider>
  );
};
