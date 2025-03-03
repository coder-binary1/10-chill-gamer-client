import PropTypes from "prop-types";

const TrendingGameCard = ({ game }) => {
  const { title, description, cover_image, genres, published_year } = game;

  return (
    <div className="card bg-base-50 image-full w-96 shadow-sm group font-poppins">
      <figure>
        <img
          className="transition-all duration-900 ease-in-out group-hover:scale-110"
          src={cover_image}
          alt={title}
        />
      </figure>
      <div className="card-body text-left">
        <div className="space-x-1">
          {genres.map((genre, idx) => (
            <p
              key={idx}
              className="grow-0 font-medium font-poppins uppercase badge badge-soft badge-error badge-sm"
            >
              {genre}
            </p>
          ))}
        </div>
        <h2 className="card-title font-titillium text-2xl">{title}</h2>
        <p className="font-poppins font-light grow-0">{description}</p>

        <p className="font-poppins font-light ">
          <span className="font-medium ">Published:</span> {published_year}
        </p>
        <div className="card-actions justify-end">
          <button className="relative btn btn-sm bg-transparent text-red-500 hover:text-white transition-all duration-100 border-0 rounded-xs overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-900 group-hover:text-white origin-bottom"></span>
            <span className="relative z-10 transition-opacity duration-900 group-hover:text-white">
              Explore Details
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

TrendingGameCard.propTypes = {
  game: PropTypes.object.isRequired,
};
export default TrendingGameCard;
