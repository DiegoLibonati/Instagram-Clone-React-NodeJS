import { DefaultUserImage } from "../../../assets/images";
import { useProfileUser } from "../../hooks/useProfileUser";

export const UserImage = ({ className }: { className: string }) => {
  const { user } = useProfileUser();

  return (
    <img
      src={user.avatar ? user.avatar : DefaultUserImage}
      alt={user.name}
      className={className}
    ></img>
  );
};
