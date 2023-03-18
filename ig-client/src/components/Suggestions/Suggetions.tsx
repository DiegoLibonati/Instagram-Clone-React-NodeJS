import { SuggetionsProfileHeader } from "./SuggetionsProfileHeader";
import { SuggetionsProfiles } from "./SuggetionsProfiles";

export const Suggetions = () => {
  return (
    <section className="flex items-center justify-start flex-col h-auto w-[25%] ml-8">
      <SuggetionsProfileHeader></SuggetionsProfileHeader>

      <SuggetionsProfiles></SuggetionsProfiles>
    </section>
  );
};
