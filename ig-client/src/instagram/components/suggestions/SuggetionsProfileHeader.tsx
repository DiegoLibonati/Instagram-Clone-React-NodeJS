import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { UserImage } from "../UserImage/UserImage";

export const SuggetionsProfileHeader = () => {
  const { user } = useContext(AuthContext);
  return (
    <article className="flex items-center justify-start w-full h-16">
      <Link to={`/${user.username}`}>
        <UserImage
          className="w-14 h-14 object-cover rounded-full"
          avatar={user.avatar}
          name={user.name}
        ></UserImage>
      </Link>

      <div className="ml-4">
        <Link to={`/${user.username}`}>
          <h2 className="text-black font-bold">{user.username}</h2>
        </Link>
        <h3 className="text-black">{user?.name}</h3>
      </div>
    </article>
  );
};
