import { DefaultUserImage } from "../../assets/Global/images";

export const UserImage = ({
  className,
  avatar,
  name,
}: {
  className: string;
  avatar: string;
  name: string;
}): JSX.Element => {
  return (
    <img
      src={avatar ? avatar : DefaultUserImage}
      alt={name}
      className={className}
    ></img>
  );
};
