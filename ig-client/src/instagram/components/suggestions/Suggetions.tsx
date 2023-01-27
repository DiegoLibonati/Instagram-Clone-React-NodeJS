import { Suggetion } from "./Suggetion";
import { SuggetionsHeader } from "./SuggetionsHeader";

export const Suggetions = () => {
  return (
    <article className="flex items-center justify-start flex-col w-full h-auto">
      <SuggetionsHeader></SuggetionsHeader>

      <ul className="flex items-center justisfy-start flex-col w-full h-auto">
        <Suggetion></Suggetion>
        <Suggetion></Suggetion>
        <Suggetion></Suggetion>
        <Suggetion></Suggetion>
        <Suggetion></Suggetion>
      </ul>
    </article>
  );
};
