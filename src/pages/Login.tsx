import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
// import useLoader from "@/hooks/useLoader";

const Login: React.FC = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isValidCaptcha, setIsValidCaptcha] = useState<boolean>(false);
  const navigate = useNavigate();
  // useLoader(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRecaptcha = (token: string | null) => {
    setIsValidCaptcha(token ? true : false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!isValidCaptcha) {
      setError("Please complete the captcha verification");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        sessionStorage.setItem("token", data.token);
        navigate("/"); // Redirect to home page after successful login
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[500px]">
      <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
        <h1 className="text-4xl">Login</h1>
        {/* <h5 className="text-2xl">Login</h5> */}

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
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          className="w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="text-white/50">Don't have an account?</p>
          <Link
            to="/sign-up"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
