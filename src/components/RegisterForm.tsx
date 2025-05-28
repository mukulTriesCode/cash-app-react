import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const RegisterForm: React.FC = () => {
  const [isValidCaptcha, setIsValidCaptcha] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
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
    setIsLoading(true);
    if (!isValidCaptcha) {
      setError("Please complete the captcha verification");
      setIsLoading(false);
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
        console.info("Registration successful");
        navigate("/login");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Registration failed");
    } finally {
      setIsLoading(false);
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
        required
      />
      <input
        className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <ReCAPTCHA
        sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
        onChange={handleRecaptcha}
      />
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <button
        className="w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>
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
