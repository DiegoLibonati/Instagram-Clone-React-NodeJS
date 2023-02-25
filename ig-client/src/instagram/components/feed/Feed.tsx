import { Histories } from "../Histories/Histories";
import { Publication } from "../Publication/Publication";

export const Feed = () => {
  return (
    <section className="flex items-center justify-start flex-col w-full h-auto mb-14 lg:m-0 lg:w-2/6 lg:mr-8">
      <Histories profileHistories={false}></Histories>
      <Publication></Publication>
      <Publication></Publication>
    </section>
  );
};
