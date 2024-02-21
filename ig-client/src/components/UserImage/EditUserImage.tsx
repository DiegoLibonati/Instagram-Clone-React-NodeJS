import { useContext } from "react";
import { DefaultUserImage } from "../../assets/Global/images";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { UIContext } from "../../contexts/Ui/UIContext";

export const EditUserImage = ({
  className,
}: {
  className: string;
}): JSX.Element => {
  const authContextStore = useContext(AuthContext);
  const uiContextStore = useContext(UIContext);

  return (
    <img
      src={
        uiContextStore?.previewSrc
          ? uiContextStore?.previewSrc
          : authContextStore?.user.avatar
          ? authContextStore?.user.avatar
          : DefaultUserImage
      }
      alt={authContextStore?.user?.name}
      className={className}
    ></img>
  );
};
