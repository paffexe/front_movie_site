import { memo, useState } from "react";
import { useSearchMovie } from "../model/useSearchMovie";
import { MovieList } from "@/widgets/movie-list";
import { Empty, Input } from "antd";
import useDebounce from "@/shared/hooks/useDebounce";

export const SearchMovie = memo(() => {
  const [value, setValue] = useState("");
  const { getMovieBySearch } = useSearchMovie();
  const debounceValue = useDebounce(value, 800);
  const { data, isFetching } = getMovieBySearch({ query: debounceValue });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-10">
      <div className="container">
        <div className="flex justify-center mb-8">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for movies..."
            className="w-full md:w-1/2 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500"
            size="large"
          />
        </div>

        {data?.results?.length ? (
          <MovieList movies={data.results} />
        ) : (
          debounceValue &&
          !isFetching && (
            <div className="flex flex-col items-center justify-center py-20">
              <Empty description="No movies found" />
            </div>
          )
        )}
      </div>
    </div>
  );
});
