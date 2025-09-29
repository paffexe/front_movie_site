import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("@/pages/home"));
const Movie = lazy(() => import("@/pages/movie"));
const Search = lazy(() => import("@/pages/search"));
const Bookmark = lazy(() => import("@/pages/bookmark"));

const CrewDetail = lazy(() => import("@/pages/crew-detail"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));
const Review = lazy(() => import("@/pages/movie-detail/reviews"));
const Cast = lazy(() => import("@/pages/movie-detail/cast"));
const Crew = lazy(() => import("@/pages/movie-detail/crew"));
const Login = lazy(() => import("@/pages/login"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/login", element: <Login /> },
        { path: "/movie", element: <Movie /> },
        { path: "/saved", element: <Bookmark /> },

        {
          path: "/movie/:id",
          element: <MovieDetail />,
          children: [
            { index: true, element: <Review /> },
            { path: "cast", element: <Cast /> },
            { path: "crew", element: <Crew /> },
          ],
        },
        { path: "/crew/:id", element: <CrewDetail /> },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
