const ReviewCardForDetails = ({ review }) => {
  return (
    <div className="card bg-base-100 border border-gray-100 shadow-xs">
      <div className="card-body">
        <p className="text-gray-500 italic">“{review.review}”</p>
        <div className="flex gap-3 mt-1">
          <figure className="w-12 rounded-full">
            <img src="https://i.ibb.co.com/zVmJV1FV/person-1.jpg" alt="Shoes" />
          </figure>
          <div>
            <h2 className="text-gray-600 font-bold">{review.name}</h2>
            <p className="text-xs text-gray-400">Profession</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardForDetails;
