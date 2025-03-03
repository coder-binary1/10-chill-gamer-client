import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import ExploreGames from "../pages/ExploreGames";
import AllReviews from "../pages/AllReviews";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import PrivateRoute from "./PrivateRoute";
import OnlyPublicRoute from "./OnlyPublicRoute";

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
        element: <PrivateRoute></PrivateRoute>,
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
