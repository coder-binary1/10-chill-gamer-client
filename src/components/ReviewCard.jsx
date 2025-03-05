import { Link, useLocation } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="card bg-base-100 w-96 border border-gray-50 shadow-xs font-poppins">
        <div className="card-body">
          <p className="font-medium text-gray-400">{review.title}</p>
          <p className="text-gray-500 italic">“{review.review}”</p>
          <div className="flex gap-3 mt-1">
            <figure className="w-12 rounded-full">
              <img
                src="https://i.ibb.co.com/zVmJV1FV/person-1.jpg"
                alt="Shoes"
              />
            </figure>
            <div>
              <h2 className="text-gray-600 font-bold">{review.name}</h2>
              <p className="text-xs text-gray-400">{review?.profession}</p>
            </div>
          </div>
          {location !== "/" && (
            <Link
              to={`/games/${review.id}`}
              className="btn btn-sm mt-4 rounded-full border-0"
            >
              Explore Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
