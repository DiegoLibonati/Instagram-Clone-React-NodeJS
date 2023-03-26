import { Link } from "react-router-dom";
import { useFollow } from "../../hooks/useFollow";
import { User } from "../../types/types";
import { UserImage } from "../UserImage/UserImage";

export const SuggetionProfile = ({ suggestion }: { suggestion: User }) => {
  const { handleFollow } = useFollow();

  return (
    <li className="flex items-center justify-between  w-full h-auto my-2 py-1">
      <div className="flex items-center justify-start w-auto h-auto">
        <UserImage
          className="w-8 h-8 object-cover rounded-full"
          avatar={suggestion.avatar}
          name={suggestion.name}
        ></UserImage>
        <Link
          className="text-black font-medium text-sm ml-2"
          to={`/${suggestion.username}`}
        >
          {suggestion.username}
        </Link>
      </div>
      <button
        className="text-blue-500 text-sm cursor-pointer"
        onClick={() => handleFollow(suggestion._id)}
      >
        Seguir
      </button>
    </li>
  );
};
