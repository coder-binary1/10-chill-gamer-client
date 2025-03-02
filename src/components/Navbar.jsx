import { Link, NavLink } from "react-router-dom";
import TopBar from "./TopBar";
import { SiV } from "react-icons/si";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Explore Games</NavLink>
      </li>
      <li>
        <NavLink to="/">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/">Add Review</NavLink>
      </li>
      <li>
        <NavLink to="/">My Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/">WatchList</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto absolute left-0 right-0 z-10">
      <TopBar></TopBar>
      <div className="navbar text-white">
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
            Chill <span className="text-red-500">Gamer</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-poppins font-medium">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
