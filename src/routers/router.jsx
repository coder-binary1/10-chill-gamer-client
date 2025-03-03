import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import ExploreGames from "../pages/ExploreGames";
import AllReviews from "../pages/AllReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/games",
        element: <ExploreGames></ExploreGames>,
        loader: () => fetch("gameData.json"),
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("reviews.json"),
      },
      {
        path: "/addReview",
      },
    ],
  },
]);

export default router;
