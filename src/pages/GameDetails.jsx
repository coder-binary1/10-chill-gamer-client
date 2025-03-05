import ReactStars from "react-rating-stars-component";
import { useLoaderData } from "react-router-dom";
import ReviewCardForDetails from "../components/ReviewCardForDetails";

const GameDetails = () => {
  const {
    title,
    thumbnail,
    rating,
    published_year,
    genre,
    review,
    name,
    email,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto my-10 font-poppins">
      <div className="card lg:card-side  bg-base-100 shadow-sm">
        <figure className="md:w-1/2">
          <img src={thumbnail} alt="Movie" />
        </figure>
        <div className="card-body md:w-1/2 space-y-2">
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
          <button className="btn btn-error text-white">Add to watchlist</button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-10">Reviews</h2>
        <div className="space-y-4 mt-3">
          <ReviewCardForDetails
            review={review}
            name={name}
            email={email}
          ></ReviewCardForDetails>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
