import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { instagramApiGetFeed } from "../../api/Feed/instagramApiGetFeed";
import { FeedContextProps, FeedContextT, Publication } from "../../types/types";

export const FeedContext = createContext<FeedContextT | null>(null);

export const FeedProvider: React.FunctionComponent<FeedContextProps> = ({
  children,
}) => {
  const [feed, setFeed] = useState<Publication[]>([]);
  const location = useLocation();

  const getFeed = async (): Promise<void> => {
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
