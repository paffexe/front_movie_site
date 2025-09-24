import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";

interface Props {
    movie: IMovie
}

export const MovieCard:FC<Props> = memo((props) => {
    const {movie} = props
    const navigate = useNavigate()
    
  return (
    <div className="bg-white dark:bg-slate-900">
        <div onClick={()=> navigate(`/movie/${movie.id}`)}>
            <img src={createImageUrl(movie.poster_path)} alt="" />
        </div>
        <div className="p-3">
            <h3 className="line-clamp-1" title={movie.title}>{movie.title}</h3>
            <p>{movie.vote_average}</p>
            <strong>{movie.release_date.split("-")[0]}</strong>
        </div>
    </div>
  );
});
