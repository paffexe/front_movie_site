import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import { removeFromCart } from "@/features/bookmark/model";
import { createImageUrl } from "@/shared/utils";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Bookmark = memo(() => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.value);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart({ id } as any));
  };

  const { t } = useTranslation();

  return (
    <div className="container py-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        {t("saved.title")}
      </h3>

      {favourites.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">{t("saved.desc")}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {favourites.map((movie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-transform hover:-translate-y-1 relative mb-5"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={createImageUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-[320px] object-cover hover:scale-105 transition-transform"
                />
              </div>

              <button
                onClick={() => handleRemove(movie.id!)}
                className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600 transition"
              >
                <FaTimes size={14} />
              </button>

              <div className="p-4 flex flex-col gap-2">
                <h4
                  className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1"
                  title={movie.title}
                >
                  {movie.title}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-yellow-500">
                    ⭐ {Number(movie.vote_average).toFixed(1)}
                  </span>
                  <span className="font-semibold">
                    {movie.release_date?.split("-")[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
