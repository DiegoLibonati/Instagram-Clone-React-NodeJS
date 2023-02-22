import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const SuggetionsProfileHeader = () => {
  const { user } = useContext(AuthContext);
  return (
    <article className="flex items-center justify-start w-full h-16">
      <Link to="/die_libonati">
        <img
          className="w-14 h-14 object-cover rounded-full"
          src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
          alt="perfil"
        ></img>
      </Link>

      <div className="ml-4">
        <Link to="/die_libonati">
          <h2 className="text-black font-bold">{user.username}</h2>
        </Link>
        <h3 className="text-black">{user.name}</h3>
      </div>
    </article>
  );
};
