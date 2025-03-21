import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const OnlyPublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default OnlyPublicRoute;
