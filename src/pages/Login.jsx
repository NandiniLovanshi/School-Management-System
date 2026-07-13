import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSchool } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo Login
    if (
      formData.username === "admin" &&
      formData.password === "12345"
    ) {
      // Login Save
      localStorage.setItem("isLogin", "true");

      // Redirect Dashboard
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-indigo-50 to-pink-100 px-4">

      <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center shadow-xl">
            <FaSchool className="text-white text-4xl" />
          </div>

          <h1 className="text-3xl font-bold mt-5 text-slate-800">
            EduAdmin
          </h1>

          <p className="text-slate-500 mt-2">
            School Management System
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex items-center border border-slate-300 rounded-xl px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-sky-400">
            <FaUser className="text-slate-400" />

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="ml-3 w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center border border-slate-300 rounded-xl px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-sky-400">
            <FaLock className="text-slate-400" />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="ml-3 w-full outline-none bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
          >
            Login
          </button>

        </form>

        {/* Demo Login */}
        <div className="mt-8 bg-sky-50 rounded-xl p-4 text-center border border-sky-100">
          <p className="text-sm text-slate-600 font-medium">
            Demo Credentials
          </p>

          <p className="text-sky-700 mt-2">
            <strong>Username:</strong> admin
          </p>

          <p className="text-sky-700">
            <strong>Password:</strong> 12345
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;