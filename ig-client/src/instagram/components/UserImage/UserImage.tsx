import { DefaultUserImage } from "../../../assets/images";

export const UserImage = ({
  className,
  avatar,
  name,
}: {
  className: string;
  avatar: string;
  name: string;
}) => {
  return (
    <img
      src={avatar ? avatar : DefaultUserImage}
      alt={name}
      className={className}
    ></img>
  );
};
