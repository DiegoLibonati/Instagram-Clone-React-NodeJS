import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserImage } from "../UserImage/UserImage";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const SuggetionsProfileHeader = (): JSX.Element => {
  const authContextStore = useContext(AuthContext);
  return (
    <article className="flex items-center justify-start w-full h-16">
      <Link to={`/${authContextStore?.user.username}`}>
        <UserImage
          className="w-14 h-14 object-cover rounded-full"
          avatar={authContextStore?.user.avatar!}
          name={authContextStore?.user.name!}
        ></UserImage>
      </Link>

      <div className="ml-4">
        <Link to={`/${authContextStore?.user.username}`}>
          <h2 className="text-black font-bold">
            {authContextStore?.user.username}
          </h2>
        </Link>
        <h3 className="text-black">{authContextStore?.user?.name}</h3>
      </div>
    </article>
  );
};
