import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { instagramApiGetSuggetions } from "../../api/Suggestion/instagramApiGetSuggetions";
import {
  SuggestionContextProps,
  SuggestionContextT,
  User,
} from "../../types/types";

export const SuggestionContext = createContext<SuggestionContextT | null>(null);

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
