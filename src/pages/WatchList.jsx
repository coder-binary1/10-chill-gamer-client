import { useLoaderData } from "react-router-dom";

const WatchList = () => {
  const watchList = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto my-10 space-y-5 font-poppins">
      <div className="max-w-5xl mx-auto my-10 space-y-5 font-poppins shadow p-2">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Game Title</th>
                <th>Genre</th>
                <th>Published</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {watchList?.map((review, idx) => (
                <tr key={review._id}>
                  <th>{idx + 1}</th>
                  <td>{review.title}</td>
                  <td>{review.genre}</td>
                  <td>{review.published_year}</td>
                  <td>{review.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
