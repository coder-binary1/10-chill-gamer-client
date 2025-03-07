const Sort = ({ reviews, setReviews }) => {
  const handleSortByRating = () => {
    const newReviewArray = [...reviews].sort((a, b) => {
      return a.rating - b.rating;
    });
    setReviews(newReviewArray);
  };
  const handleSortByYear = () => {
    const newReviewArray = [...reviews].sort((a, b) => {
      return a.published_year - b.published_year;
    });
    setReviews(newReviewArray);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 ">
        Sort
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <button onClick={handleSortByRating}>By Rating</button>
        </li>
        <li>
          <button onClick={handleSortByYear}>By Year</button>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
