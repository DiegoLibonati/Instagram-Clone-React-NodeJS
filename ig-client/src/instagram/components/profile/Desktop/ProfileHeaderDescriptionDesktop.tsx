import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useProfileUser } from "../../../hooks/useProfileUser";
import { UserImage } from "../../UserImage/UserImage";

export const ProfileHeaderDescriptionDesktop = () => {
  const { user, isMainUser } = useProfileUser();
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/accounts/edit");
  };
  return (
    <article className="flex items-start justify-start flex-row w-full h-auto 2xl:w-[75%]">
      <UserImage className="w-44 h-4w-44 object-cover rounded-full mr-14"></UserImage>

      <div className="flex items-start justify-center flex-col w-full h-auto">
        <div className="flex items-center justify-start flex-row w-[75%] h-auto">
          {isMainUser ? (
            <>
              <h2 className="text-lg mr-8">{user.username}</h2>
              <button
                className="text-sm px-5 py-1 bg-zinc-200 rounded-md cursor-pointer mr-2"
                onClick={handleEditProfile}
              >
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
              <button className="text-sm px-5 py-1 bg-blue-500 text-white rounded-md cursor-pointer mr-2">
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
          <p className="text-sm">{user.description}</p>
        </div>
      </div>
    </article>
  );
};
