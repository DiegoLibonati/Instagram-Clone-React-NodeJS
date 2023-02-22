import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const ProfileHeaderNumbers = () => {
  const { user } = useContext(AuthContext);

  return (
    <article className="flex items-center justify-evenly flex-row w-full h-auto">
      <img
        className="w-16 h-16 object-cover rounded-full md:w-20 md:h-20"
        src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
        alt="perfil"
      ></img>

      <div className="flex items-center justify-between flex-row w-2/3 h-auto">
        <div className="flex items-center justify-center flex-col w-full h-auto">
          <h2 className="font-bold md:text-lg">{user.publications.length}</h2>
          <p className="text-xs md:text-lg">Publicaciones</p>
        </div>
        <div className="flex items-center justify-center flex-col w-full h-auto">
          <h2 className="font-bold md:text-lg">{user.followers.length}</h2>
          <p className="text-xs md:text-lg">Seguidores</p>
        </div>
        <div className="flex items-center justify-center flex-col w-full h-auto">
          <h2 className="font-bold md:text-lg">{user.following.length}</h2>
          <p className="text-xs md:text-lg">Seguidos</p>
        </div>
      </div>
    </article>
  );
};
