import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo(({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-transform hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={createImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-[320px] object-cover hover:scale-105 transition-transform"
        />
      </div>

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
