import { useProfileUser } from "../../hooks/useProfileUser";

export const ProfileHeaderActions = () => {
  const { isMainUser } = useProfileUser();

  return (
    <article className="flex items-center justify-evenly flex-row w-full h-auto mt-2 ">
      {isMainUser ? (
        <>
          <button className="p-2 text-xs w-[33%] text-black font-bold shadow-sm md:text-lg">
            Editar perfil
          </button>
          <button className="p-2 text-xs w-[50%] text-black font-bold shadow-sm md:text-lg">
            Compartir perfil
          </button>
        </>
      ) : (
        <>
          <button className="p-2 text-xs w-[33%] text-black font-bold shadow-sm md:text-lg">
            Seguir
          </button>
        </>
      )}
    </article>
  );
};
