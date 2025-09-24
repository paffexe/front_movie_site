import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSort from "../../../features/movie-sort";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const { data } = getMovies({ page: page as string });

  return (
    <div>
      <div className="container">
        <h2>Total: {data?.total_results?.toLocaleString()}</h2>
      </div>
      <MovieSort />
      <MovieList movies={data?.results} />
      <MoviePagination page={page} total_pages={data?.total_results} />
    </div>
  );
});
