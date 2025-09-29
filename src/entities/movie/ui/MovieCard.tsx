import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/features/bookmark/model";
import type { RootState } from "@/app/store";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo(({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favourites = useSelector((state: RootState) => state.favourites.value); 
  const isFavourited = favourites.some((m) => m.id === movie.id);

  const toggleFavourite = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (isFavourited) {
      dispatch(removeFromCart(movie));
    } else {
      dispatch(addToCart(movie));
    }
  };

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-transform hover:-translate-y-1 mb-5 relative"
    >
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={createImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-[320px] object-cover hover:scale-105 transition-transform"
        />
      </div>

      <button
        onClick={toggleFavourite}
        className="absolute top-3 right-3 text-red-500 text-xl bg-white/70 dark:bg-black/60 rounded-2xl p-1.5"
      >
        {isFavourited ? <BsFillBookmarkFill /> : <BsBookmark />}
      </button>

      <div className="p-4 flex flex-col gap-2">
        <h3
          className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1"
          title={movie.title}
        >
          {movie.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <span className="font-medium text-yellow-500">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
          <span className="font-semibold">
            {movie.release_date.split("-")[0]}
          </span>
        </div>
      </div>
    </div>
  );
});
