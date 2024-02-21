import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
import { UserImage } from "../UserImage/UserImage";

export const PublicationHeader = ({
  avatar,
  name,
  username,
}: {
  avatar: string;
  name: string;
  username: string;
}): JSX.Element => {
  return (
    <div className="flex items-center justify-between p-2 w-full h-auto">
      <div className="flex items-center justify-between w-8 h-auto">
        <UserImage
          className="rounded-full mr-2 h-7 w-7"
          avatar={avatar}
          name={name}
        ></UserImage>
        <Link to={`/${username}`}>
          <h3 className="text-black">{username}</h3>
        </Link>
      </div>

      <SlOptionsVertical color="black" size={25}></SlOptionsVertical>
    </div>
  );
};
