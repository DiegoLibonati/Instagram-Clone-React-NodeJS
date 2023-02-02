import { BsArchive, BsChat, BsSuitHeart } from "react-icons/bs";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";

export const CommentsDesktop = () => {
  return (
    <div
      className={`flex items-center justify-center flex-row bg-black bg-opacity-50 w-screen h-screen z-[999999999]`}
    >
      <div className="flex items-center justify-center flex-row w-[75%] h-[90%] bg-black shadow-md">
        <img
          src="https://www.imagineforest.com/blog/wp-content/uploads/2021/12/asian-woman-5450041_640.jpg"
          alt="paisaje"
          className="w-4/6 h-auto object-cover"
        ></img>

        <div className="flex items-start justify-start flex-col w-2/6 h-full relative bg-white shadow-sm overflow-y-scroll overflow-x-hidden">
          <div className="flex items-center justify-start flex-row w-full h-14 shadow-sm p-2">
            <img
              src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
              alt="perfil"
              className="rounded-full mr-2 h-8 w-8"
            ></img>
            <h2 className="text-black font-medium text-sm mr-2">
              pythoncodess
            </h2>
            <button className="text-blue-700 text-sm cursor-pointer">
              Seguir
            </button>
            <FiMoreHorizontal
              size={25}
              color="black"
              className="absolute right-4 cursor-pointer"
            ></FiMoreHorizontal>
          </div>

          <div className="flex items-start justify-center flex-col w-full h-[calc(h-full - h-14)] p-2 mt-2">
            <div className="flex items-start justify-start flex-row w-auto h-auto">
              <img
                src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
                alt="perfil"
                className="rounded-full mr-4 h-8 w-8"
              ></img>
              <div className="flex items-start justify-start flex-col w-[80%] h-auto">
                <p className="text-black text-sm ">
                  <span className="font-medium">pythoncodess</span> Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Eligendi totam
                  voluptatum quibusdam pariatur. Vero in consequuntur repellat,
                  corrupti provident beatae.
                </p>
                <p className="text-gray-400 text-xs mt-1">4 d</p>
              </div>
            </div>

            <ul className="flex items-start justify-start flex-col w-auto h-full mt-5">
              <li className="flex items-start justify-start flex-row w-full h-auto mb-6">
                <img
                  src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
                  alt="perfil"
                  className="rounded-full mr-4 h-8 w-8"
                ></img>
                <div className="flex items-start justify-start flex-col w-[80%] h-auto">
                  <p className="text-black text-sm">
                    <span className="font-medium">die_libonati</span> Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati non id placeat libero explicabo, suscipit minima
                    nesciunt officiis perferendis illo inventore voluptates
                    nihil impedit sapiente incidunt enim adipisci et.
                    Repudiandae.
                  </p>
                  <div className="flex flex-row items-start justify-start w-full h-auto mt-1">
                    <p className="text-xs text-gray-400 mr-2">7 d</p>
                    <button className="text-xs text-gray-400 font-medium">
                      7 Me gusta
                    </button>
                  </div>
                </div>
                <BsSuitHeart
                  color="black"
                  size={13}
                  className="mt-4 ml-4"
                ></BsSuitHeart>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-start w-full h-auto p-4 shadow-inner absolute bottom-0 bg-white">
            <div className="flex items-center justify-between w-full h-auto">
              <div className="flex items-center justify-between h-auto">
                <BsSuitHeart
                  color="black"
                  size={25}
                  className="mr-4"
                ></BsSuitHeart>
                <BsChat color="black" size={25} className="mr-4"></BsChat>
                <FiSend color="black" size={25} className="mr-4"></FiSend>
              </div>
              <BsArchive color="black" size={25}></BsArchive>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-auto mt-2">
              <h2 className="text-sm font-medium">33.506 Me gusta</h2>
              <p className="text-xs text-gray-500 mt-1">HACE 4 DIAS</p>
            </div>

            <form className="flex flex-row items-center justify-between w-full h-auto mt-3 shadow-inner p-2">
              <input
                className="outline-none w-2/3"
                placeholder="Agrega un comentario..."
              ></input>
              <button className="text-blue-700 w-1/3 text-end">Publicar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
