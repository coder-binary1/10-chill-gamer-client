import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import moment from "moment";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const joinDate = moment
    .unix(user.metadata.createdAt / 1000)
    .format("DD MMM YYYY, h:mm:ss A");
  const lastLogin = moment.unix(user.metadata.lastLoginAt / 1000).fromNow();

  return (
    <div className="grid place-items-center mt-10 font-poppins ">
      <img className="w-48 rounded-full" src={user.photoURL} alt="" />
      <div className="mt-4 space-y-1 text-center">
        <h2 className="text-2xl font-bold">{user.displayName}</h2>
        <p>Joining Date: {joinDate}</p>
        <p>Last Login Time: {lastLogin}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Profile;
