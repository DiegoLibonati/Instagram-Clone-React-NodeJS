import { FiMoreHorizontal } from "react-icons/fi";
import { PublicationContext } from "../../../../contexts/PublicationContext";
import { UserImage } from "../../UserImage/UserImage";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UIContext } from "../../../../contexts/UIContext";

export const CommentsDesktopDialogHeader = () => {
  const { activePublication, setActivePublication } =
    useContext(PublicationContext);
  const { setModalClose } = useContext(UIContext);

  return (
    <div className="flex items-center justify-start flex-row w-full h-14 shadow-slate-300 shadow-sm p-2">
      <UserImage
        className="rounded-full mr-2 h-8 w-8"
        avatar={activePublication.avatar}
        name={activePublication.username}
      ></UserImage>
      <Link
        to={`/${activePublication.username}`}
        onClick={() => {
          setActivePublication({
            id: "",
            imgLink: "",
            description: "",
            likes: [],
            comments: [],
            date: "",
            username: "",
            avatar: "",
            name: "",
          });
          setModalClose();
        }}
      >
        <h2 className="text-black font-medium text-sm mr-2">
          {activePublication.username}
        </h2>
      </Link>
      <FiMoreHorizontal
        size={25}
        color="black"
        className="absolute right-4 cursor-pointer"
      ></FiMoreHorizontal>
    </div>
  );
};
