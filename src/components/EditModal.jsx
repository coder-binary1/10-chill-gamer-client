import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditModal = ({ selectedReview, updateReview }) => {
  const [updatedGenre, setUpdatedGenre] = useState("");
  const [updatedRating, setUpdatedRating] = useState(0);
  const {
    _id,
    title,
    thumbnail,
    published_year,
    genre,
    rating,
    review,
    name,
    email,
  } = selectedReview;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const published_year = form.published_year.value;
    const review = form.review.value;

    fetch(`http://localhost:5000/review/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title,
        thumbnail,
        published_year,
        genre: updatedGenre,
        rating: updatedRating,
        review,
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          updateReview({
            ...selectedReview,
            title,
            thumbnail,
            published_year,
            genre: updatedGenre,
            rating: updatedRating,
            updatedRating,
            review,
            name,
            email,
          });

          form.reset();
          document.getElementById("modal_close_btn").click();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign up successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setUpdatedGenre(genre);
  }, [genre]);

  return (
    <div>
      <dialog id="edit_review_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              id="modal_close_btn"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div>
            <form onSubmit={handleUpdate} className="card-body py-12">
              <h2 className="text-center text-4xl font-black font-titillium">
                Update Review
              </h2>
              <fieldset className="fieldset">
                <label className="fieldset-label font-titillium font-bold">
                  Game Title
                </label>
                <input
                  type="text"
                  className="input  w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
                  placeholder="Game Title"
                  name="title"
                  required
                  defaultValue={title}
                />
                <label className="fieldset-label font-titillium font-bold">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  className="input  w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
                  placeholder="Thumbnail"
                  name="thumbnail"
                  required
                  defaultValue={thumbnail}
                />

                <label className="fieldset-label font-titillium font-bold">
                  Review Description
                </label>
                <textarea
                  className="textarea textarea-lg h-36 w-full focus:outline-0 focus:border-red-500 focus:border-dashed"
                  placeholder="Review Description"
                  name="review"
                  required
                  defaultValue={review}
                ></textarea>
                <label className="fieldset-label font-titillium font-bold">
                  Rating
                </label>
                <div className="rating space-x-1">
                  <input
                    onClick={() => setUpdatedRating(1)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={rating === 1}
                  />
                  <input
                    onClick={() => setUpdatedRating(2)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={rating === 2}
                  />
                  <input
                    onClick={() => setUpdatedRating(3)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={rating === 3}
                  />
                  <input
                    onClick={() => setUpdatedRating(4)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={rating === 4}
                  />
                  <input
                    onClick={() => setUpdatedRating(5)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={rating === 5}
                  />
                </div>
                <label className="fieldset-label font-titillium font-bold">
                  Published Year
                </label>
                <input
                  type="number"
                  className="input  w-full focus:outline-0 focus:border-red-500 focus:border-dashed tracking-wide "
                  placeholder="Published Year"
                  name="published_year"
                  required
                  defaultValue={published_year}
                />
                <label className="fieldset-label font-titillium font-bold">
                  Select Genres
                </label>
                <select
                  className="input input-lg w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
                  name="genre"
                  value={updatedGenre}
                  onChange={(e) => setUpdatedGenre(e.target.value)}
                >
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
                  className="input  w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
                  defaultValue={email}
                  name="email"
                  disabled
                />
                <label className="fieldset-label font-titillium font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="input  w-full focus:outline-0 focus:border-red-500 focus:border-dashed "
                  defaultValue={name}
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
      </dialog>
    </div>
  );
};

export default EditModal;
