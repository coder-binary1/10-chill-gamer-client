import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews?limit=3")
      .then((res) => res.json())
      .then((userData) => setReviews(userData));
  }, []);

  return (
    <div className="text-center my-16">
      <h2 className="text-4xl font-titillium font-bold text-gray-700">
        Reviews
      </h2>
      <div className="border-2 w-10 m-auto border-red-500 mt-2 mb-6"></div>
      <div className="flex flex-wrap justify-center gap-6 mx-5 text-left">
        {reviews.map((review, idx) => {
          return <ReviewCard key={idx} review={review}></ReviewCard>;
        })}
      </div>
    </div>
  );
};

export default Reviews;
