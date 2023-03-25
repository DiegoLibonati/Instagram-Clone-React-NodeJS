import { createContext, useState, useEffect } from "react";
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

  const getFeed = async () => {
    const request = await instagramApiGetFeed();

    const { payload } = request;

    setFeed(payload);
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    <FeedContext.Provider value={{ feed, setFeed }}>
      {children}
    </FeedContext.Provider>
  );
};
