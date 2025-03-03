import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((userData) => setReviews(userData));
  }, []);

  console.log(reviews);

  return (
    <div className="text-center my-16 font-poppins">
      <h2 className="text-4xl font-titillium font-bold text-gray-700">
        Reviews
      </h2>
      <div className="border-2 w-10 m-auto border-red-500 mt-2 mb-6"></div>
      <div className="flex flex-wrap justify-center gap-6 mx-5 text-left">
        {reviews?.map((review, idx) => {
          return (
            <div
              key={idx}
              className="card bg-base-100 w-96 border border-gray-50 shadow-xs"
            >
              <div className="card-body">
                <p className="font-medium text-gray-400">{review.game_title}</p>
                <p className="font-light text-gray-600">
                  {review.reviews[0].review}
                </p>
                <div className="flex gap-3">
                  <figure className="w-12 rounded-full">
                    <img src={review.reviews[0].image} alt="Shoes" />
                  </figure>
                  <div>
                    <h2 className="text-gray-600 font-bold">
                      {review.reviews[0].name}
                    </h2>
                    <p className="text-xs text-gray-400">
                      {review.reviews[0].profession}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
