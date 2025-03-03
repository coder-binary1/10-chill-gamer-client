import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const reviews = useLoaderData();

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-6 my-12">
      {reviews.map((review, idx) => (
        <ReviewCard key={idx} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default AllReviews;
