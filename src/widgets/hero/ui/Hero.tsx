import { useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useMovie, type IMovie } from "@/entities/movie";
import { createImageUrl } from "@/shared/utils";

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const imageBase = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container mb-4">
      <div className="mb-4">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {data?.results?.slice(0, 6).map((movie: IMovie) => (
            <SwiperSlide key={movie.id}>
              <img
                src={`${imageBase}${createImageUrl(movie.backdrop_path)}`}
                alt={movie.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[640px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="rounded-lg p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-red-500/50 dark:hover:shadow-red-700/60">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={2}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-full max-w-[900px] mx-auto"
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {data?.results?.slice(0, 6).map((movie: IMovie) => (
            <SwiperSlide key={movie.id}>
              <img
                src={`${imageBase}${createImageUrl(movie.poster_path)}`}
                alt={movie.title}
                className="w-full h-16 sm:h-20 md:h-24 lg:h-[120px] object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});
