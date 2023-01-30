// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";

export const Histories = () => {
  return (
    <article className="bg-white w-screen lg:w-full h-24">
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
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center flex-col">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117"
            alt="perfil"
            className="w-14 h-14 rounded-full"
          ></img>
          <h3 className="text-gray-500 text-xs text-ellipsis w-18 overflow-hidden">
            die_libonati
          </h3>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};
