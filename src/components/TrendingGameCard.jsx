import PropTypes from "prop-types";

const TrendingGameCard = ({ game }) => {
  const { title, description, cover_image, genres, published_year, origin } =
    game;

  return (
    <div className="card bg-base-50 image-full  w-96 shadow-sm">
      <figure>
        <img src={cover_image} alt={title} />
      </figure>
      <div className="card-body text-left">
        <p className="grow-0 font-medium font-poppins uppercase badge badge-soft badge-error badge-sm">
          {genres}
        </p>
        <h2 className="card-title font-titillium text-xl">{title}</h2>
        <p className="font-poppins font-light grow-0">{description}</p>

        <p className="font-poppins font-light">
          <span className="font-medium">Published:</span> {published_year}
        </p>
        <div className="card-actions justify-end">
          <button className="relative btn btn-sm bg-transparent text-red-500 hover:text-white transition-all duration-100 border-0 rounded-xs overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            <span className="relative z-10 transition-opacity duration-300">
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
