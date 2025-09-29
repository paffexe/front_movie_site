import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("@/pages/home"));
const Movie = lazy(() => import("@/pages/movie"));
const Search = lazy(() => import("@/pages/search"));
const Tickets = lazy(() => import("@/pages/tickets"));

const CrewDetail = lazy(() => import("@/pages/crew-detail"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));
const Review = lazy(() => import("@/pages/movie-detail/reviews"));
const Cast = lazy(() => import("@/pages/movie-detail/cast"));
const Crew = lazy(() => import("@/pages/movie-detail/crew"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/movie", element: <Movie /> },
        { path: "/tickets", element: <Tickets /> },

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
