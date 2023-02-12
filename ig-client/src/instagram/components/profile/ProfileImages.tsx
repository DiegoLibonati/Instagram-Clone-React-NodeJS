import { AiOutlineCamera } from "react-icons/ai";
import { ProfileImage } from "./ProfileImage";

const images: Array<any> = [
  // {
  //   id: "1",
  //   imgLink:
  //     "https://www.imagineforest.com/blog/wp-content/uploads/2021/12/asian-woman-5450041_640.jpg",
  //   countLikes: 32,
  //   countComments: 7,
  // },
  // {
  //   id: "2",
  //   imgLink:
  //     "https://www.imagineforest.com/blog/wp-content/uploads/2021/12/asian-woman-5450041_640.jpg",
  //   likes: 32,
  //   comments: 7,
  // },
  // {
  //   id: "3",
  //   imgLink:
  //     "https://www.imagineforest.com/blog/wp-content/uploads/2021/12/asian-woman-5450041_640.jpg",
  //   likes: 32,
  //   comments: 7,
  // },
];

export const ProfileImages = () => {
  if (images.length === 0) {
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
      {images.map((image) => {
        return (
          <ProfileImage
            key={image.id}
            imgLink={image.imgLink}
            countLikes={image.likes}
            countComments={image.comments}
          ></ProfileImage>
        );
      })}
    </section>
  );
};
