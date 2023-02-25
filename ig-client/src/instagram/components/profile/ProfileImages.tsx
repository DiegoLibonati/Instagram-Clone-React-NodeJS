import { AiOutlineCamera } from "react-icons/ai";
import { Publication } from "../../../types/types";
import { useProfileUser } from "../../hooks/useProfileUser";
import { ProfileImage } from "./ProfileImage";

export const ProfileImages = () => {
  const { user } = useProfileUser();

  if (user.publications.length === 0) {
    return (
      <section className="flex pb-14 w-full h-full lg:pb-5 2xl:w-[75%]">
        <article className="flex items-center justify-center flex-col w-full h-full">
          <AiOutlineCamera
            className="rounded-full p-2 border-black border-2"
            size={65}
          ></AiOutlineCamera>
          <p className="mt-2 font-semibold text-lg">Aún no hay publicaciones</p>
        </article>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-3 gap-x-[2px] gap-y-[2px] pb-14 w-full h-auto lg:pb-5 2xl:w-[75%] 2xl:gap-x-[20px] 2xl:gap-y-[20px]">
      {user.publications.map((publication: Publication) => {
        return (
          <ProfileImage
            key={publication.id}
            imgLink={publication.imgLink}
            likes={publication.likes}
            comments={publication.comments}
          ></ProfileImage>
        );
      })}
    </section>
  );
};
