import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import { AuthContext } from "../Providers/AuthProvider";
import { AiOutlineLogin } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlLogout } from "react-icons/sl";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const location = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogOut = () => {
    LogOut();
    navigate("/");
  };

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
          to={`/my-review/${user?.email}`}
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
          to={`/watchlist/${user?.email}`}
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
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-poppins text-red-500 bg-red-300"
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

        <div
          className="dropdown navbar-end inline-flex mr-5 lg:hidden"
          ref={dropdownRef}
        >
          {!user ? (
            <Link to="/login" className="btn btn-sm border-0">
              Login
            </Link>
          ) : (
            <button
              className="btn p-0 border-0 bg-transparent shadow-none hover:shadow-none"
              onClick={toggleDropdown}
            >
              <img
                className="w-8 rounded-full relative"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </button>
          )}

          {isOpen && user && (
            <ul className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-36 p-2 shadow font-poppins bg-base-100 border top-6">
              <li>
                <Link to="/profile">
                  <CgProfile />
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut}>
                  <SlLogout /> Logout
                </button>
              </li>
            </ul>
          )}
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
