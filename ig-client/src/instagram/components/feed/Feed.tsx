import { Histories } from "./histories/Histories";
import { Publication } from "./publication/Publication";

export const Feed = () => {
  return (
    <section className="flex items-center justify-start flex-col w-full h-auto lg:w-2/6 lg:mr-8">
      <Histories></Histories>
      <Publication></Publication>
      <Publication></Publication>
    </section>
  );
};
