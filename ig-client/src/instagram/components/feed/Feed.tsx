import { useEffect, useState } from "react";
import { instagramApiGetFeed } from "../../../api/instagramApiGetFeed";
import { instagramCheck } from "../../../assets/images";

import { usePagination } from "../../../hooks/usePagination";
import { Publication as PublicationType } from "../../../types/types";
import { Loader2 } from "../../../ui/components/Loader/Loader2/Loader2";
import { useProfileUser } from "../../hooks/useProfileUser";
import { Histories } from "../Histories/Histories";
import { Publication } from "../Publication/Publication";

export const Feed = () => {
  const [feed, setFeed] = useState<PublicationType[]>([]);

  const { arrayPagination, allViewed, loading, elementRef } = usePagination(
    feed,
    5
  );

  const { user } = useProfileUser();

  const getFeed = async () => {
    const request = await instagramApiGetFeed();

    const { payload } = request;

    setFeed(payload);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <section
      className="flex items-center justify-start flex-col w-full h-auto mb-14 lg:m-0 lg:w-2/6 lg:mr-8"
      ref={elementRef}
    >
      <Histories profileHistories={false}></Histories>

      {!!arrayPagination!.length &&
        arrayPagination!.map((publication) => {
          return (
            <Publication
              key={publication.id}
              publication={publication}
            ></Publication>
          );
        })}

      {!user.following?.length && (
        <div className="flex flex-col items-center justify-center w-full h-auto p-2 mb-2">
          <img
            src={instagramCheck}
            alt="instagram-check"
            className="h-24 w-24 mb-2"
          ></img>
          <h2 className="text-2xl font-normal">No hay nada para mostrar</h2>
          <p className="text-center">
            Empieza a seguir a nuevos usuarios para ver contenido nuevo.
          </p>
        </div>
      )}

      {loading && <Loader2></Loader2>}

      {((allViewed && !loading && arrayPagination?.length) ||
        (!arrayPagination?.length && user.following?.length > 0)) && (
        <div className="flex flex-col items-center justify-center w-full h-auto p-2 mb-2">
          <img
            src={instagramCheck}
            alt="instagram-check"
            className="h-24 w-24 mb-2"
          ></img>
          <h2 className="text-2xl font-normal">Estás al día</h2>
          <p className="text-center">
            Has visto todas las publicaciones nuevas de los últimos 3 días.
          </p>
        </div>
      )}
    </section>
  );
};
