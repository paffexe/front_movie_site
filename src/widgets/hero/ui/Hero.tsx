import { useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
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
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data?.results?.slice(0, 6).map((movie: IMovie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`${imageBase}${createImageUrl(movie.poster_path)}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
