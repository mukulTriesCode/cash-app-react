import { useGetUserQuery } from "@/services/profileService";
import React from "react";
// import { RootState } from "@/store";
// import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  // const profileData = useSelector((state: RootState) => state.profile);
  // const { id, username, email, password } = profileData || {};
  const { data, isLoading } = useGetUserQuery("");
  const user = data?.user;
  return (
    <div className="p-4">
      {isLoading ? (
        <></>
      ) : (
        <div className="max-w-[500px] p-4 mx-auto border flex flex-col gap-4">
          <h4 className="text-3xl">Your Profile</h4>
          <p className="text-xl">ID: {user?._id}</p>
          {/* <p className="text-xl">Username: {username}</p> */}
          <p className="text-xl">Email: {user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
