import { Link, useNavigate } from "react-router-dom";
import SingInWithGoogle from "./SingInWithGoogle";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import {
  emailValidation,
  passwordValidation,
} from "../utilities/credentialsValidation";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    const emailCheck = emailValidation(email);
    const passCheck = passwordValidation(password);

    emailCheck.isValid &&
      passCheck.isValid &&
      signInWithEmail(email, password)
        .then((res) => {
          const userData = {
            name: res.user.displayName,
            email: res.user.email,
            photoUrl: res.user.photoURL,
            createdAt: res.user.metadata.createdAt,
            lastLoginAt: res.user.metadata.lastLoginAt,
          };
          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userData),
          });
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign in successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((err) => setError([err.code]));
    emailCheck.isValid || setError(emailCheck.message);
    passCheck.isValid ||
      setError([...emailCheck.message, ...passCheck.message]);
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
            {error && (
              <div role="alert" className="alert alert-error alert-soft">
                <ul>
                  {error.map((err, idx) => (
                    <li key={idx} className="list-disc ml-4">
                      {err}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
