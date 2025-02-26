import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/features/profileSlice"; // Adjust the import path
import { AppDispatch, RootState } from "@/store"; // Add AppDispatch import

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.profile);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(formData)).unwrap();
      // Optionally reset form after successful registration
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      console.log("Registration successful");
      // You might want to redirect here
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-fit">
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] flex gap-4 flex-col w-full border border-white/15 py-5 m-4 px-4 rounded-md bg-[#131313]"
      >
        <h5 className="text-center text-2xl">Sign Up</h5>
        <input
          className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          disabled={loading}
        />
        <input
          className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          disabled={loading}
        />
        <input
          className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          disabled={loading}
        />
        <button
          className="w-full text-center px-4 py-3 bg-green-600 hover:bg-green-700 transition rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
