import { useLocation } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const location = useLocation().pathname;

  return (
    <>
      {review.reviews.map((singleReview, idx) => (
        <div
          key={idx}
          className="card bg-base-100 w-96 border border-gray-50 shadow-xs font-poppins"
        >
          <div className="card-body">
            <p className="font-medium text-gray-400">{review.game_title}</p>
            <p className="text-gray-500 italic">“{singleReview.review}”</p>
            <div className="flex gap-3 mt-1">
              <figure className="w-12 rounded-full">
                <img src={singleReview.image} alt="Shoes" />
              </figure>
              <div>
                <h2 className="text-gray-600 font-bold">{singleReview.name}</h2>
                <p className="text-xs text-gray-400">
                  {singleReview.profession}
                </p>
              </div>
            </div>
            {location !== "/" && (
              <button className="btn btn-sm mt-4 rounded-full border-0">
                Explore Details
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
