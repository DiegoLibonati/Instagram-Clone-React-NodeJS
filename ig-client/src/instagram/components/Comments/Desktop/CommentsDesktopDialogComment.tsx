import { BsSuitHeart } from "react-icons/bs";

export const CommentsDesktopDialogComment = () => {
  return (
    <li className="flex items-start justify-start flex-row w-full h-auto mb-6">
      <img
        src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
        alt="perfil"
        className="rounded-full mr-4 h-8 w-8"
      ></img>
      <div className="flex items-start justify-start flex-col w-[80%] h-auto">
        <p className="text-black text-sm">
          <span className="font-medium">die_libonati</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Obcaecati non id placeat
          libero explicabo, suscipit minima nesciunt officiis perferendis illo
          inventore voluptates nihil impedit sapiente incidunt enim adipisci et.
          Repudiandae.
        </p>
        <div className="flex flex-row items-start justify-start w-full h-auto mt-1">
          <p className="text-xs text-gray-400 mr-2">7 d</p>
          <button className="text-xs text-gray-400 font-medium">
            7 Me gusta
          </button>
        </div>
      </div>
      <BsSuitHeart color="black" size={13} className="mt-4 ml-4"></BsSuitHeart>
    </li>
  );
};
