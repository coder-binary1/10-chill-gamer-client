import { Link, useNavigate } from "react-router-dom";
import SingInWithGoogle from "./SingInWithGoogle";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { signUpWithEmail, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    signUpWithEmail(email, password)
      .then(() => {
        updateUser(name, photo).then(() => {
          form.reset();
          navigate("/");
        });
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <div
      className="flex justify-center items-center font-poppins my-10"
      style={{ minHeight: "calc(100vh - 24rem)" }}
    >
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-lg border border-dashed border-red-200">
        <form onSubmit={handleSignUp} className="card-body py-12">
          <h2 className="text-center text-4xl font-black font-titillium">
            Sign up with email
          </h2>
          <fieldset className="fieldset">
            <label className="fieldset-label font-titillium font-bold">
              Name
            </label>
            <input
              type="text"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              placeholder="Name"
              name="name"
            />
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
              PhotUrl
            </label>
            <input
              type="text"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              placeholder="Photo Url"
              name="photo"
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
              Sign Up
            </button>
          </fieldset>
          <p>
            Have an account!{" "}
            <Link to="/login" className="text-red-500 font-medium">
              Sign In
            </Link>
          </p>
          <SingInWithGoogle></SingInWithGoogle>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
