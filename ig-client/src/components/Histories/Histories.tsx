// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";

import { Histories as HistoriesType } from "../../types/types";
import { UserImage } from "../UserImage/UserImage";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";

const histories: Array<Record<string, string>> = [
  {
    id: "1",
    imgLink: "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png",
    name: "die_libonati",
  },
];

export const Histories = ({
  className = "",
  profileHistories = false,
}: HistoriesType) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (
    profileHistories &&
    user.username !== location.pathname.replace("/", "")
  ) {
    return (
      <div className="flex items-center justify-center w-full h-24">
        <h2>¡Hey este usuario no tiene historias destacadas!</h2>
      </div>
    );
  }

  return (
    <article className={`bg-white w-screen lg:w-full h-24 ${className}`}>
      <Swiper
        slidesPerView={5}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode]}
        className="flex items-center justify-start flex-row w-full h-full"
        breakpoints={{
          // when window width is >= 640px
          280: {
            width: 280,
            slidesPerView: 2,
          },
          360: {
            width: 360,
            slidesPerView: 5,
          },
          410: {
            width: 410,
            slidesPerView: 6,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 8,
          },
          1024: {
            width: 284,
            slidesPerView: 3,
          },
          1280: {
            width: 336.8,
            slidesPerView: 5,
          },
          1366: {
            width: 364.27,
            slidesPerView: 5,
          },
          1440: {
            width: 384,
            slidesPerView: 5,
          },
          1600: {
            width: 426.66,
            slidesPerView: 6,
          },
          1680: {
            width: 448,
            slidesPerView: 6,
          },
          1920: {
            width: 512,
            slidesPerView: 6,
          },
        }}
      >
        {location.pathname === "/" && (
          <SwiperSlide className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center relative cursor-pointer">
              <UserImage
                avatar={user.avatar}
                name={user.name}
                className="w-14 h-14 rounded-full"
              ></UserImage>
              <MdOutlineAddCircleOutline
                className="absolute bottom-3"
                size={25}
                color={"white"}
              ></MdOutlineAddCircleOutline>
            </div>
            {histories.map((history) => {
              return <></>;
            })}
          </SwiperSlide>
        )}

        {profileHistories &&
          user.username === location.pathname.replace("/", "") && (
            <SwiperSlide className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-center relative cursor-pointer">
                <UserImage
                  avatar={user.avatar}
                  name={user.name}
                  className="w-14 h-14 rounded-full"
                ></UserImage>
                <MdOutlineAddCircleOutline
                  className="absolute bottom-3"
                  size={25}
                  color={"white"}
                ></MdOutlineAddCircleOutline>
              </div>
            </SwiperSlide>
          )}
      </Swiper>
    </article>
  );
};
