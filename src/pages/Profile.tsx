import { ProfileRootState } from "@/store/profileStore";
import React from "react";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const { id, username, email, password } = useSelector(
    (state: ProfileRootState) => state.root
  );
  return (
    <div>
      <h1>Profile</h1>
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Profile;
