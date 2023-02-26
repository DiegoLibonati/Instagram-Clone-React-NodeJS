import { UserImage } from "../../UserImage/UserImage";

export const CommentsMobileForm = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-auto fixed bottom-0 bg-gray-100">
      <div className="flex items-center justify-between flex-row w-full h-10 p-2">
        <button className="text-lg">😋</button>
        <button className="text-lg">😋</button>
        <button className="text-lg">😋</button>
        <button className="text-lg">😋</button>
        <button className="text-lg">😋</button>
        <button className="text-lg">😋</button>
        <button className="text-lg">😋</button>
        <button className="text-lg">😋</button>
      </div>
      <form className="flex items-center justify-start w-full h-10 p-2">
        <UserImage className="rounded-full w-8 h-8 mr-2"></UserImage>
        <input
          placeholder="Agrega un comentario..."
          className="bg-transparent placeholder:text-black border-none outline-none text-black text-sm"
        ></input>
        <button className="text-sm absolute right-5 text-blue-600">
          Enviar
        </button>
      </form>
    </div>
  );
};
