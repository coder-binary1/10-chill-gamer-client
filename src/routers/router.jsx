import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import ExploreGames from "../pages/ExploreGames";
import AllReviews from "../pages/AllReviews";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import PrivateRoute from "./PrivateRoute";
import OnlyPublicRoute from "./OnlyPublicRoute";
import Profile from "../pages/Profile";
import AddReview from "../pages/AddReview";
import GameDetails from "../pages/GameDetails";
import MyReviews from "../pages/MyReviews";
import WatchList from "../pages/WatchList";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/games",
        element: <ExploreGames></ExploreGames>,
        loader: () => fetch("https://10-chill-gamer-server.vercel.app/games"),
      },

      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        // loader: () => fetch("https://10-chill-gamer-server.vercel.app/review"),
      },
      {
        path: "/review/:id",
        element: <GameDetails></GameDetails>,
        loader: ({ params }) =>
          fetch(`https://10-chill-gamer-server.vercel.app/review/${params.id}`),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-review/:email",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://10-chill-gamer-server.vercel.app/review?email=${params.email}`
          ),
      },
      {
        path: "/watchlist/:email",
        element: (
          <PrivateRoute>
            <WatchList></WatchList>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://10-chill-gamer-server.vercel.app/watchlist?email=${params.email}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <OnlyPublicRoute>
            <Login></Login>
          </OnlyPublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <OnlyPublicRoute>
            <SignUp></SignUp>
          </OnlyPublicRoute>
        ),
      },
    ],
  },
]);

export default router;
