import useLoader from "@/hooks/useLoader";
import { useGetUserQuery } from "@/services/profileService";
import React from "react";

const Profile: React.FC = () => {
  const { data, isLoading } = useGetUserQuery("");
  const user = data?.user;
  useLoader(isLoading);
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
