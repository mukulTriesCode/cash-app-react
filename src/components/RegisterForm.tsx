import React, { FormEvent, useState } from "react";
// @ts-ignore
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { AppDispatch, RootState } from "@/store"; // Add AppDispatch import
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
// import { registerUser } from "@/features/profileSlice"; // Adjust the import path

const RegisterForm: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.profile);
  const [isValidCaptcha, setIsValidCaptcha] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRecaptcha = (token: string | null) => {
    setIsValidCaptcha(token ? true : false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidCaptcha) {
      console.error("Invalid reCAPTCHA");
      return;
    }
    try {
      const response = await fetch(`api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset form after successful registration
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        console.log("Registration successful");
        // You might want to redirect here
      } else {
        console.error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 flex-col w-full max-w-[500px]"
    >
      <h1 className="text-4xl">Create New Account</h1>
      {/* <h5 className="text-2xl">Sign Up</h5> */}
      <input
        className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
        disabled={loading}
        required
      />
      <input
        className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        disabled={loading}
        required
      />
      <input
        className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        disabled={loading}
        required
      />
      <ReCAPTCHA
        sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
        onChange={handleRecaptcha}
      />
      <button
        className="w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <div className="flex items-center justify-center gap-2 mt-4">
        <p className="text-white/50">Already have an account?</p>
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-400 transition"
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
