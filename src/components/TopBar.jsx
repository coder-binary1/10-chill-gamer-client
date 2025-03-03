import { FaFacebookF, FaTwitter, FaTwitch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
const TopBar = () => {
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
      <div>
        <button className="btn bg-red-500 border-0 btn-xs  rounded-l-full text-white">
          Login
        </button>
        <button className="btn bg-red-500 border-0 border-l-1 btn-xs rounded-r-full text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default TopBar;
