import { AiOutlineCamera } from "react-icons/ai";
import { useProfileUser } from "../../hooks/useProfileUser";
import { Publication } from "../../types/types";
import { ProfileImage } from "./ProfileImage";

export const ProfileImages = () => {
  const { user } = useProfileUser();

  if (user.publications.length === 0) {
    return (
      <section className="flex pb-14 w-full lg:pb-5 2xl:w-[75%] h-60">
        <article className="flex items-center justify-center flex-col w-full h-full relative">
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
      {[...user.publications].reverse()?.map((publication: Publication) => {
        return (
          <ProfileImage
            key={publication._id}
            id={publication._id}
            imgLink={publication.imgLink}
            likes={publication.likes}
            comments={publication.comments}
            description={publication.description}
            date={publication.date}
            username={publication.username}
            avatar={publication.avatar}
            name={publication.name}
          ></ProfileImage>
        );
      })}
    </section>
  );
};
