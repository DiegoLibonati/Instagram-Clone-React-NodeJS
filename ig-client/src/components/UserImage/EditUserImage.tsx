import { useContext } from "react";
import { DefaultUserImage } from "../../assets/Global/images";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { UIContext } from "../../contexts/Ui/UIContext";

export const EditUserImage = ({ className }: { className: string }) => {
  const { user } = useContext(AuthContext);
  const { previewSrc } = useContext(UIContext);

  return (
    <img
      src={
        previewSrc ? previewSrc : user.avatar ? user.avatar : DefaultUserImage
      }
      alt={user?.name}
      className={className}
    ></img>
  );
};
