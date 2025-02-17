import React, { useState } from "react";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData :>> ", formData);
    // Assuming there's a function to handle the login logic
    // handleLogin(formData.email, formData.password);
  };

  return (
    <div className="h-[calc(100vh-95px)] grid place-items-center">
      <div className="w-fit">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] flex gap-4 flex-col w-full border border-white/15 py-5 m-4 px-4 rounded-md bg-[#131313]"
        >
          <h5 className="text-center text-2xl">Login</h5>
          <input
            className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <input
            className="bg-transparent border border-white/15 p-3 px-5 rounded-md"
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            required
          />
          <button
            className="w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
