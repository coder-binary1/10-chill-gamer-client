import { useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import EditModal from "../components/EditModal";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState([]);
  const getReview = useLoaderData();

  useEffect(() => {
    setMyReviews(getReview);
  }, [getReview]);

  const handleEdit = (review) => {
    setSelectedReview(review);
    document.getElementById("edit_review_modal").showModal();
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://10-chill-gamer-server.vercel.app/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMyReviews((reviews) =>
                reviews.filter((review) => review._id !== id)
              );
            }
          });
      }
    });
  };

  const handleUpdateReviewOnUi = (updatedReview) => {
    setMyReviews((prevReviews) =>
      prevReviews.map((review) =>
        review._id === updatedReview._id ? updatedReview : review
      )
    );
  };

  return (
    <div className="max-w-3xl lg:max-w-5xl mx-5 md:mx-auto  my-10 space-y-5 font-poppins shadow p-2">
      {!myReviews.length ? (
        <h2 className="text-center">No Data Found</h2>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-xs md:table-md">
            <thead>
              <tr>
                <th></th>
                <th>Game Title</th>
                <th>Genre</th>
                <th>Published</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myReviews?.map((review, idx) => (
                <tr key={review._id}>
                  <th>{idx + 1}</th>
                  <td>{review.title}</td>
                  <td>{review.genre}</td>
                  <td>{review.published_year}</td>
                  <td>{review.review}</td>
                  <td className="space-y-2 text-2xl ">
                    <button
                      onClick={() => handleEdit(review)}
                      className="btn btn-sm md:btn-lg "
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="btn btn-sm md:btn-lg btn-error text-white"
                    >
                      <FaDeleteLeft />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <EditModal
        selectedReview={selectedReview}
        updateReview={handleUpdateReviewOnUi}
      ></EditModal>
    </div>
  );
};

export default MyReviews;
