export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
}

export interface IMovieParams {
  page: string;
  sort_by?: string;
  fromDate?: string;
  toDate?: string;
  with_genres?: string;
}
