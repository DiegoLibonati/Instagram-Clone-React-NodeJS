import { UserImage } from "../../UserImage/UserImage";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { InputText } from "../../Input/InputText/InputText";
import { useComment } from "../../../hooks/useComment";
import { useForm } from "../../../hooks/useForm";
import { PublicationContext } from "../../../contexts/Publications/PublicationContext";

export const CommentsMobileForm = () => {
  const { activePublication } = useContext(PublicationContext);
  const { user } = useContext(AuthContext);
  const { handleAddComment } = useComment();
  const { formState, onInputChange, onResetForm } = useForm({
    comment: "",
  });

  return (
    <div className="flex items-center justify-center flex-col w-full h-auto fixed bottom-0 bg-gray-100">
      <div className="flex items-center justify-between flex-row w-full h-10 p-2">
        <button className="text-lg">😀</button>
        <button className="text-lg">😋</button>
        <button className="text-lg">😄</button>
        <button className="text-lg">🤣</button>
        <button className="text-lg">😍</button>
        <button className="text-lg">🤔</button>
        <button className="text-lg">🤧</button>
        <button className="text-lg">😜</button>
      </div>
      <form
        className="flex items-center justify-start w-full h-10 p-2"
        onSubmit={(e) =>
          handleAddComment(
            e,
            activePublication._id,
            formState.comment,
            activePublication.context,
            onResetForm
          )
        }
      >
        <UserImage
          className="rounded-full w-8 h-8 mr-2"
          avatar={user?.avatar}
          name={user?.name}
        ></UserImage>
        <InputText
          value={formState.comment}
          name="comment"
          id="commentInput"
          onChange={onInputChange}
          placeholder="Agrega un comentario..."
          classNameInput="bg-transparent placeholder:text-black border-none outline-none text-black text-sm"
        ></InputText>
        <button className="text-sm absolute right-5 text-blue-600">
          Enviar
        </button>
      </form>
    </div>
  );
};
