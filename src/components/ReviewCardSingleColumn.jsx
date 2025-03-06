import { useEffect, useState } from "react";

const ReviewCardForDetails = ({ review, name, email }) => {
  const [userPhoto, setUserPhoto] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${email}`)
      .then((res) => res.json())
      .then((data) => setUserPhoto(data));
  }, [email]);
  return (
    <div className="card bg-base-100 border border-gray-100 shadow-xs ">
      <div className="card-body">
        <p className="text-gray-500 italic">“{review}”</p>
        <div className="flex gap-3 mt-1">
          <figure className="w-12 rounded-full">
            <img src={userPhoto?.photoUrl} alt={name} />
          </figure>
          <div>
            <h2 className="text-gray-600 font-bold">{name}</h2>
            <p className="text-xs text-gray-400">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardForDetails;
