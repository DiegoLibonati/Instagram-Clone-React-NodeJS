export const SuggetionProfile = () => {
  return (
    <li className="flex items-center justify-between  w-full h-auto my-2 py-1">
      <div className="flex items-center justify-start w-auto h-auto">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
          alt="perfil"
        ></img>
        <h2 className="text-black font-medium text-sm ml-2">die_libonati</h2>
      </div>
      <button className="text-blue-500 text-sm cursor-pointer">Seguir</button>
    </li>
  );
};
