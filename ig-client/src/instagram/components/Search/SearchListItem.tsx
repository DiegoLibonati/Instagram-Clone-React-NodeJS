import { useNavigate } from "react-router-dom";
import { UserImage } from "../UserImage/UserImage";

export const SearchListItem = ({
  username,
  avatar,
}: {
  username: string;
  avatar: string;
}) => {
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-row items-center justify-start w-full h-14 cursor-pointer rounded-full px-2 py-3 mt-1 hover:bg-gray-200"
      onClick={() => navigate(`/${username}`)}
    >
      <UserImage
        className="rounded-full w-12 h-12"
        avatar={avatar}
        name={username}
      ></UserImage>
      <h3 className="ml-2 font-medium">{username}</h3>
    </li>
  );
};
