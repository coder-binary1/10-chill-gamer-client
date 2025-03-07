import ReviewCard from "../components/ReviewCard";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import Sort from "../components/Sort";
import Filter from "../components/Filter";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filterBy, setFilterBy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setFilterBy(data);
      });
  }, []);

  return (
    <div className="max-w-7xl lg:mx-auto mx-5 mt-4 mb-12 relative">
      <div className="flex justify-end ">
        <Filter setReviews={setReviews} filterBy={filterBy}></Filter>
        <Sort reviews={reviews} setReviews={setReviews}></Sort>
      </div>
      {!reviews.length ? (
        <Loading></Loading>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {reviews?.map((review, idx) => (
            <ReviewCard key={idx} review={review}></ReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
