import { Link, NavLink, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const location = useLocation().pathname;

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-500"
              : location === "/" || theme === "dark"
              ? "text-white"
              : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive
              ? "text-red-500"
              : location === "/"
              ? "text-white"
              : theme === "dark"
              ? "text-white"
              : "text-black"
          }
        >
          Explore Games
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive
              ? "text-red-500"
              : location === "/"
              ? "text-white"
              : theme === "dark"
              ? "text-white"
              : "text-black"
          }
        >
          All Reviews
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addReview"
          className={({ isActive }) =>
            isActive
              ? "text-red-500"
              : location === "/"
              ? "text-white"
              : theme === "dark"
              ? "text-white"
              : "text-black"
          }
        >
          Add Review
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myReview"
          className={({ isActive }) =>
            isActive
              ? "text-red-500"
              : location === "/"
              ? "text-white"
              : theme === "dark"
              ? "text-white"
              : "text-black"
          }
        >
          My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "text-red-500"
              : location === "/"
              ? "text-white"
              : theme === "dark"
              ? "text-white"
              : "text-black"
          }
        >
          Watchlist
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={
        location !== "/"
          ? `container mx-auto left-0 right-0 z-10`
          : `container mx-auto absolute left-0 right-0 z-10`
      }
    >
      <TopBar></TopBar>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-poppins text-red-500"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-3xl font-titillium font-extrabold"
          >
            <span className={location !== "/" ? "" : "text-white"}>Chill</span>{" "}
            <span className="text-red-500">Gamer</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-poppins font-medium ">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
