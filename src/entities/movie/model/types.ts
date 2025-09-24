export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string
}

export interface IMovieParams {
  page: string;
}
