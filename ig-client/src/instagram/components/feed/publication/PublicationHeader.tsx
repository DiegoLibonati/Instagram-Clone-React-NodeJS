import { SlOptionsVertical } from "react-icons/sl";

export const PublicationHeader = () => {
  return (
    <div className="flex items-center justify-between p-2 w-full h-auto">
      <div className="flex items-center justify-between w-8 h-auto">
        <img
          src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
          alt="perfil"
          className="rounded-full mr-2"
        ></img>
        <h3 className="text-black">die_libonati</h3>
      </div>

      <SlOptionsVertical color="black" size={25}></SlOptionsVertical>
    </div>
  );
};
