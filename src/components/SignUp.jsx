import { Link, useNavigate } from "react-router-dom";
import SingInWithGoogle from "./SingInWithGoogle";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../utilities/credentialsValidation";

const SignUp = () => {
  const { signUpWithEmail, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    const nameCheck = nameValidation(name);
    const emailCheck = emailValidation(email);
    const passCheck = passwordValidation(password);

    nameCheck.isValid &&
      emailCheck.isValid &&
      passCheck.isValid &&
      signUpWithEmail(email, password)
        .then((res) => {
          updateUser(name, photo).then(() => {
            const userData = {
              name: res.user.displayName,
              email: res.user.email,
              photoUrl: res.user.photoURL,
              createdAt: res.user.metadata.createdAt,
              lastLoginAt: res.user.metadata.lastLoginAt,
            };
            fetch("https://10-chill-gamer-server.vercel.app/user", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(userData),
            });
            form.reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign up successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          });
        })
        .catch((err) => {
          setError([err.code]);
        });
    nameCheck.isValid || setError(nameCheck.message);
    emailCheck.isValid ||
      setError([...nameCheck.message, ...emailCheck.message]);
    passCheck.isValid ||
      setError([
        ...nameCheck.message,
        ...emailCheck.message,
        ...passCheck.message,
      ]);
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
