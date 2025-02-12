import React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const profileData = useSelector((state: RootState) => state.profile);
  const { id, username, email, password } = profileData || {};
  return (
    <div className="p-4">
      <div className="max-w-[500px] p-4 mx-auto border flex flex-col gap-4">
        <h4 className="text-3xl">Your Profile</h4>
        <p className="text-xl">ID: {id}</p>
        <p className="text-xl">Username: {username}</p>
        <p className="text-xl">Email: {email}</p>
        <p className="text-xl">Password: {password}</p>
      </div>
    </div>
  );
};

export default Profile;
