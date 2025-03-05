import { FaFacebookF, FaTwitter, FaTwitch } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import ThemeSwitcher from "./ThemeSwitcher";

const TopBar = () => {
  const { user, LogOut } = useContext(AuthContext);
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

  return (
    <div className="mt-5 mr-6 hidden lg:flex items-center gap-6 float-right">
      <div>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
      <div className="text-red-500 flex gap-4">
        <Link>
          <FaFacebookF />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
        <Link>
          <FaTwitch />
        </Link>
      </div>
      {user ? (
        <div className="dropdown" ref={dropdownRef}>
          <button
            className="btn p-0 border-0 bg-transparent shadow-none hover:shadow-none"
            onClick={toggleDropdown}
          >
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="left"
              className="w-8 rounded-full relative"
              src={user.photoURL}
              alt={user.displayName}
            />
            <Tooltip id="my-tooltip" />
          </button>
          {isOpen && (
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm">
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
      ) : (
        <div>
          <Link
            to="/login"
            className="btn bg-red-500 border-0 btn-xs  rounded-l-full text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn bg-red-500 border-0 border-l-1 btn-xs rounded-r-full text-white"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopBar;
