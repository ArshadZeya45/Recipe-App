import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";

const Login = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(recipecontext);
  const { register, reset, handleSubmit } = useForm();
  const loginHandler = (data) => {
    const isUserExist = JSON.parse(localStorage.getItem("user"));
    if (
      isUserExist &&
      isUserExist.email == data.email &&
      isUserExist.password == data.password
    ) {
      localStorage.setItem("auth", JSON.stringify(true));
      setAuthUser(isUserExist);
      navigate("/");
      reset();
      toast.success(
        `Welcome back ${isUserExist.first_name} ${isUserExist.last_name}`
      );
      return;
    } else {
      localStorage.setItem("auth", JSON.stringify(true));
      toast.error("Email or Password in Incorrect");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E] px-4">
      <div className="w-full max-w-md bg-[#151515] rounded-2xl shadow-lg p-8 border border-[#2A2A2A]">
        <h2 className="text-3xl font-bold text-center text-[#FF7043] mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-[#AAAAAA] mb-8">
          Login to continue exploring delicious recipes on Zaika
        </p>

        <form
          className="space-y-5"
          onSubmit={handleSubmit(loginHandler)}
          method="POST"
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Email Address
            </label>
            <input
              {...register("email")}
              required={true}
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#1E1E1E] text-white border border-[#2A2A2A] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Password
            </label>
            <input
              {...register("password")}
              required={true}
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#1E1E1E] text-white border border-[#2A2A2A] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
            />
          </div>

          {/* Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#FF7043] text-[#151515] font-semibold py-3 rounded-xl shadow-md hover:bg-opacity-90 transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Don't have an account */}
        <p className="text-center text-[#AAAAAA] mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#FF7043] hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
