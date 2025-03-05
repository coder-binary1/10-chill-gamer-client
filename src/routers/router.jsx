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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/games",
        element: <ExploreGames></ExploreGames>,
        loader: () => fetch("http://localhost:5000/games"),
      },
      {
        path: "/games/:id",
        element: <GameDetails></GameDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/games/${params.id}`),
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("http://localhost:5000/reviews"),
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
        path: "/myReview",
        element: <PrivateRoute></PrivateRoute>,
      },
      {
        path: "/wishlist",
        element: <PrivateRoute></PrivateRoute>,
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
