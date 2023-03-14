import { UserImage } from "../UserImage/UserImage";

export const NotificationList = () => {
  return (
    <ul className="flex flex-col items-center justify-start w-full h-auto">
      <li className="flex flex-row items-center justify-start relative w-full h-16 mt-1">
        <UserImage
          avatar=""
          className="rounded-full w-12 h-12"
          name=""
        ></UserImage>

        <p className="text-xs ml-1">
          A <span className="font-semibold">die_libonati</span> le gusto tu
          publicacion.
        </p>

        <img
          src="https://www.pngall.com/wp-content/uploads/12/Yellow-Camaro-PNG-Photos.png"
          alt="auto"
          className="w-10 h-10 object-contain absolute right-2"
        ></img>
      </li>

      <li className="flex flex-row items-center justify-start relative w-full h-16 mt-1">
        <UserImage
          avatar=""
          className="rounded-full w-12 h-12"
          name=""
        ></UserImage>

        <p className="text-xs ml-1">
          A <span className="font-semibold">die_libonati</span> comenzo a
          seguirte
        </p>

        <button className="p-2 text-xs w-16 text-white font-bold shadow-sm bg-blue-500 rounded-md absolute right-2">
          Seguir
        </button>
      </li>

      <li className="flex flex-row items-center justify-start relative w-full h-16 mt-1">
        <UserImage
          avatar=""
          className="rounded-full w-12 h-12"
          name=""
        ></UserImage>

        <p className="text-xs ml-1">
          A <span className="font-semibold">die_libonati</span> comenzo a
          seguirte
        </p>

        <button className="p-2 text-xs w-18 text-black font-bold shadow-sm bg-zinc-200 rounded-md absolute right-2">
          Siguiendo
        </button>
      </li>
    </ul>
  );
};
