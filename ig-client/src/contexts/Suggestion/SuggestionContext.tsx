import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { instagramApiGetSuggetions } from "../../api/Suggestion/instagramApiGetSuggetions";
import { User } from "../../types/types";

interface SuggestionContextProps {
  children: React.ReactNode;
}

export const SuggestionContext = createContext<null | any>(null);

export const SuggestionProvider: React.FunctionComponent<
  SuggestionContextProps
> = ({ children }) => {
  const [suggestions, setSuggestions] = useState<User[]>([]);

  const location = useLocation();

  const getSuggestions = async () => {
    const request = await instagramApiGetSuggetions();

    const { payload } = request;

    setSuggestions(payload);
  };

  useEffect(() => {
    setSuggestions([]);
  }, [location]);

  return (
    <SuggestionContext.Provider value={{ suggestions, getSuggestions }}>
      {children}
    </SuggestionContext.Provider>
  );
};
