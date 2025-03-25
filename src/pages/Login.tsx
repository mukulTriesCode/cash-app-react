import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
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
    <div className="h-[calc(100vh-95px)] grid place-items-center">
      <div className="w-fit">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] flex gap-4 flex-col w-full border border-white/15 py-5 m-4 px-4 rounded-md bg-[#131313]"
        >
          <h5 className="text-center text-2xl">Login</h5>

          {error && <p className="text-red-500 text-center">{error}</p>}

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

          <button
            className="w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
