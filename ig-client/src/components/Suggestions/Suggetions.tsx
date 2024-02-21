import { useContext, useEffect } from "react";
import { SuggestionContext } from "../../contexts/Suggestion/SuggestionContext";
import { SuggetionsProfileHeader } from "./SuggetionsProfileHeader";
import { SuggetionsProfiles } from "./SuggetionsProfiles";

export const Suggetions = (): JSX.Element => {
  const suggestionContextStore = useContext(SuggestionContext);

  useEffect(() => {
    suggestionContextStore?.getSuggestions();
  }, []);

  return (
    <section className="flex items-center justify-start flex-col h-auto w-[25%] ml-8">
      <SuggetionsProfileHeader></SuggetionsProfileHeader>

      <SuggetionsProfiles
        suggestions={suggestionContextStore?.suggestions!}
      ></SuggetionsProfiles>
    </section>
  );
};
