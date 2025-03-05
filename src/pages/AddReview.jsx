import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [genre, setGenre] = useState("default");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleAddReview = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const thumbnail = from.thumbnail.value;
    const title = from.title.value;
    const published_year = from.published_year.value;
    const review = from.review.value;
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        thumbnail,
        title,
        review,
        published_year,
        rating,
        genre,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId &&
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign up successful",
            showConfirmButton: false,
            timer: 1500,
          });
        navigate("/myReview");
      });
  };

  return (
    <div
      className="flex justify-center items-center font-poppins md:my-10"
      style={{ minHeight: "calc(100vh - 24rem)" }}
    >
      <div className="card bg-base-100 w-full max-w-4xl shrink-0 shadow-lg md:border border-dashed border-red-200">
        <form onSubmit={handleAddReview} className="card-body py-12">
          <h2 className="text-center text-4xl font-black font-titillium">
            Add Review
          </h2>
          <fieldset className="fieldset">
            <label className="fieldset-label font-titillium font-bold">
              Game Title
            </label>
            <input
              type="text"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              placeholder="Game Title"
              name="title"
              required
            />
            <label className="fieldset-label font-titillium font-bold">
              Thumbnail URL
            </label>
            <input
              type="text"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              placeholder="Thumbnail"
              name="thumbnail"
              required
            />

            <label className="fieldset-label font-titillium font-bold">
              Review Description
            </label>
            <textarea
              className="textarea textarea-lg h-36 w-full focus:outline-0 focus:border-red-500 focus:border-dashed"
              placeholder="Review Description"
              name="review"
              required
            ></textarea>
            <label className="fieldset-label font-titillium font-bold">
              Rating
            </label>
            <div className="rating space-x-1">
              <input
                onClick={() => setRating(1)}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                onClick={() => setRating(2)}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                onClick={() => setRating(3)}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                onClick={() => setRating(4)}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                onClick={() => setRating(5)}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <label className="fieldset-label font-titillium font-bold">
              Publishing Year
            </label>
            <input
              type="number"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed tracking-wide "
              placeholder="Y Y Y Y"
              name="published_year"
              required
            />
            <label className="fieldset-label font-titillium font-bold">
              Select Genres
            </label>
            <select
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              required={genre !== "default"}
            >
              <option value={"default"} disabled>
                Select Genres
              </option>
              <option value={"Action"}>Action</option>
              <option value={"Fantasy"}>Fantasy</option>
              <option value={"Adventure"}>Adventure</option>
              <option value={"Shooter"}>Shooter</option>
              <option value={"Multiplayer"}>Multiplayer</option>
            </select>

            <label className="fieldset-label font-titillium font-bold">
              Your Email
            </label>
            <input
              type="email"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              defaultValue={user.email}
              name="email"
              disabled
            />
            <label className="fieldset-label font-titillium font-bold">
              Your Name
            </label>
            <input
              type="text"
              className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
              defaultValue={user.displayName}
              name="name"
              disabled
            />
            <button className="btn btn-lg btn-neutral mt-4 border-0 text-white hover:bg-red-500">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
