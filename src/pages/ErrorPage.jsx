import Lottie from "lottie-react";
import robot404Animation from "./robot-404.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto md:w-1/4 space-y-5">
      <Lottie
        loop={false}
        animationData={robot404Animation}
        className="shadow pl-10"
      />
      <Link to="/" className="btn btn-lg btn-error text-white border">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
