import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";

export const Home = memo(() => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  
  return <div>
    {/* <Hero/> */}
    <MovieList movies={data?.results?.slice(0, 8)}/>
  </div>;
});
