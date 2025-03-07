import ReactStars from "react-rating-stars-component";
import { useLoaderData } from "react-router-dom";
import ReviewCardSingleColumn from "../components/ReviewCardSingleColumn";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const GameDetails = () => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    title,
    thumbnail,
    rating,
    published_year,
    genre,
    review,
    name,
    email,
  } = useLoaderData();

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(`http://localhost:5000/watchList?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((id) => id._id === _id);
        if (matched) {
          document.getElementById(`btn-${_id}`).setAttribute("disabled", true);
          document.getElementById(`btn-${_id}`).innerText =
            "Already in your watch list!";
        }
      });
  }, [user, _id]);

  const handleAddWatchList = (id) => {
    user &&
      fetch(`http://localhost:5000/watchList/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0 || data.upsertedId) {
            Swal.fire({
              title: "Successfully add to watch list",
              position: "top-end",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            document
              .getElementById(`btn-${_id}`)
              .setAttribute("disabled", true);
            document.getElementById(`btn-${_id}`).innerText =
              "Already in your watchlist!";
          }
        });
  };

  return (
    <div className="max-w-4xl mx-auto mb-5 md:my-10 font-poppins">
      <div className="card lg:card-side  bg-base-100 shadow-sm">
        <figure className="lg:w-1/2">
          <img src={thumbnail} alt="Movie" />
        </figure>
        <div className="card-body lg:w-1/2 md:items-center lg:items-start space-y-2">
          <div className="space-x-2">
            <p className="badge badge-soft badge-error">{genre}</p>
          </div>
          <h2 className="card-title text-3xl">{title}</h2>
          {/* <p className="grow-0">{description}</p> */}
          <p className="grow-0">
            <span className="font-medium">Published: </span>
            {published_year}
          </p>
          {/* <p className="grow-0 capitalize">
            <span className="font-medium">Origin: </span>
            {origin}
          </p> */}
          <div className="grow">
            <ReactStars
              count={5}
              value={rating}
              isHalf={true}
              char={"★"}
              size={28}
              activeColor="#ff637d"
              color="#4a5565"
            />
          </div>
          <button
            id={`btn-${_id}`}
            onClick={() => handleAddWatchList(_id)}
            className="btn btn-error text-white"
          >
            Add to watchlist
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-10 mx-5">Reviews</h2>
        <div className="space-y-4 mt-3">
          <ReviewCardSingleColumn
            review={review}
            name={name}
            email={email}
          ></ReviewCardSingleColumn>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
