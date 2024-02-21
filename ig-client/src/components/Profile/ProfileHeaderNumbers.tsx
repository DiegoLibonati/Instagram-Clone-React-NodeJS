import { useProfileUser } from "../../hooks/useProfileUser";
import { UserImage } from "../UserImage/UserImage";

export const ProfileHeaderNumbers = (): JSX.Element => {
  const { user } = useProfileUser();

  return (
    <article className="flex items-center justify-evenly flex-row w-full h-auto">
      <UserImage
        className="w-16 h-16 object-cover rounded-full md:w-20 md:h-20"
        avatar={user.avatar}
        name={user.name}
      ></UserImage>

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
