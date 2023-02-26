import { useContext } from "react";
import { DefaultUserImage } from "../../../assets/images";
import { AuthContext } from "../../../contexts/AuthContext";
import { UIContext } from "../../../contexts/UIContext";

export const EditUserImage = ({ className }: { className: string }) => {
  const { user } = useContext(AuthContext);
  const { previewSrc } = useContext(UIContext);

  return (
    <img
      src={
        previewSrc ? previewSrc : user.avatar ? user.avatar : DefaultUserImage
      }
      alt={user.name}
      className={className}
    ></img>
  );
};
