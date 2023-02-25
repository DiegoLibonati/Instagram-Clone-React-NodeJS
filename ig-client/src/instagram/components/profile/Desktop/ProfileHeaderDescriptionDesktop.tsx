import { FiSettings } from "react-icons/fi";
import { useProfileUser } from "../../../hooks/useProfileUser";

export const ProfileHeaderDescriptionDesktop = () => {
  const { user, isMainUser } = useProfileUser();
  return (
    <article className="flex items-start justify-start flex-row w-full h-auto 2xl:w-[75%]">
      <img
        className="w-44 h-4w-44 object-cover rounded-full mr-14"
        src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
        alt="perfil"
      ></img>

      <div className="flex items-start justify-center flex-col w-full h-auto">
        <div className="flex items-center justify-start flex-row w-[75%] h-auto">
          {isMainUser ? (
            <>
              <h2 className="text-lg mr-8">{user.username}</h2>
              <button className="text-sm px-5 py-1 bg-zinc-200 rounded-md cursor-pointer mr-2">
                Editar perfil
              </button>
              <FiSettings
                size={20}
                color="black"
                className="2xl:ml-5"
              ></FiSettings>
            </>
          ) : (
            <>
              <h2 className="text-lg mr-8">{user.username}</h2>
              <button className="text-sm px-5 py-1 bg-zinc-200 rounded-md cursor-pointer mr-2">
                Seguir
              </button>
            </>
          )}
        </div>
        <div className="flex items-center justify-evenly flex-row w-full h-auto mt-5">
          <div className="flex items-center justify-center flex-col mr-2 2xl:mr-0 2xl:flex-row">
            <h2 className="font-bold 2xl:mr-1">{user.publications.length}</h2>
            <p className="text-sm">publicaciones</p>
          </div>
          <div className="flex items-center justify-center flex-col mr-2 2xl:mr-0 2xl:flex-row">
            <h2 className="font-bold 2xl:mr-1">{user.followers.length}</h2>
            <p className="text-sm">seguidores</p>
          </div>
          <div className="flex items-center justify-center flex-col mr-2 2xl:mr-0 2xl:flex-row">
            <h2 className="font-bold 2xl:mr-1">{user.following.length}</h2>
            <p className="text-sm">seguidos</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-[50%] h-auto mt-5">
          <h2 className="font-bold text-base">{user.name}</h2>
          <p className="text-sm">
            Villa Luro - 24 Años<br></br>
            "Vive y deja vivir"<br></br>
            Jugador de Futbol<br></br>
            Desarrollador FullStack en Leafnoise<br></br>
          </p>
        </div>
      </div>
    </article>
  );
};
