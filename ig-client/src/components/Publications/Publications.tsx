import { Publication as PublicationType } from "../../types/types";
import { Publication } from "../Publication/Publication";

export const Publications = ({
  publications,
}: {
  publications: PublicationType[];
}) => {
  return (
    <main className="flex flex-col items-start justify-center w-screen h-auto">
      {publications.map((publication) => {
        return (
          <Publication
            key={publication._id}
            publication={publication}
          ></Publication>
        );
      })}
    </main>
  );
};
