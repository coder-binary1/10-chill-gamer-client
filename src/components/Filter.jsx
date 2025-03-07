const Filter = ({ setReviews, filterBy }) => {
  const genreArray = [...new Set(filterBy.map((review) => review.genre))];

  const handleFilter = (genre) => {
    if (genre === "All") {
      setReviews(filterBy);
    } else {
      const filteredReview = filterBy.filter((review) =>
        review.genre.includes(genre)
      );
      setReviews(filteredReview);
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 ">
        Filter
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <button onClick={() => handleFilter("All")}>Show All</button>
        </li>
        {genreArray.map((genre, idx) => (
          <li key={idx}>
            <button onClick={() => handleFilter(genre)}>{genre}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
