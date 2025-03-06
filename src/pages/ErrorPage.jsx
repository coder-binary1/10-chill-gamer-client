import Lottie from "lottie-react";
import groovyWalkAnimation from "./robot-404.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-scree mx-auto md:w-1/4 space-y-5">
      <Lottie animationData={groovyWalkAnimation} />
      <Link to="/" className="btn btn-lg btn-error text-white">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
