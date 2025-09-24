import { useMovie } from "@/entities/movie";
import { memo } from "react";

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  console.log(data?.results?.slice(0, 6));

  return <div>Hero</div>;
});
