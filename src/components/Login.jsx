import { Link, useNavigate } from "react-router-dom";
import SingInWithGoogle from "./SingInWithGoogle";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
      .then(() => {
        form.reset();
        navigate("/myReview");
      })
      .catch((err) => alert(err.code));
  };
  return (
    <div
      className="flex justify-center items-center font-poppins my-10"
      style={{ minHeight: "calc(100vh - 24rem)" }}
    >
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-lg border border-dashed border-red-200">
        <form onSubmit={handleSignIn} className="card-body py-12">
          <h2 className="text-center text-4xl font-black font-titillium">
            Sign in with email
          </h2>
          <fieldset className="fieldset">
            <label className="fieldset-label font-titillium font-bold">
              Email
            </label>
            <input
              type="email"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              placeholder="Email"
              name="email"
            />
            <label className="fieldset-label font-titillium font-bold">
              Password
            </label>
            <input
              type="password"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              placeholder="Password"
              name="password"
            />

            <button className="btn btn-lg btn-neutral mt-4 border-0 text-white hover:bg-red-500">
              Sign In
            </button>
          </fieldset>
          <p>
            Are you new here!{" "}
            <Link to="/signup" className="text-red-500 font-medium">
              Sign Up
            </Link>
          </p>

          <SingInWithGoogle></SingInWithGoogle>
        </form>
      </div>
    </div>
  );
};

export default Login;
