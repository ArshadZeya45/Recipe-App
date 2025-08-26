import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";

const Signup = () => {
  const { authUser, setAuthUser } = useContext(recipecontext);
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const registerHandler = (data) => {
    let isUserAlreadyExists = JSON.parse(localStorage.getItem("user"));
    if (isUserAlreadyExists && isUserAlreadyExists.email == data.email) {
      localStorage.setItem("auth", JSON.stringify(false));
      toast("You have already account , please login");
      reset();
      navigate("/login");
      return;
    }
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("auth", JSON.stringify(true));
    reset();
    navigate("/");
    const user = JSON.parse(localStorage.getItem("user"));
    setAuthUser(user);
    toast.success(
      `Hii, ${user.first_name.toCapitalize()} you are successfully registered`
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E] px-4">
      <div className="w-full max-w-md bg-[#151515] rounded-2xl shadow-lg p-8 border border-[#2A2A2A]">
        <h2 className="text-3xl font-bold text-center text-[#FF7043] mb-6">
          Welcome to Zaika 🍴
        </h2>
        <p className="text-center text-[#AAAAAA] mb-8">
          Create your account to explore delicious recipes
        </p>

        <form
          className="space-y-5"
          onSubmit={handleSubmit(registerHandler)}
          method="POST"
        >
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              First Name
            </label>
            <input
              {...register("first_name")}
              required={true}
              type="text"
              placeholder="Enter your first name"
              className="w-full bg-[#1E1E1E] text-white border border-[#2A2A2A] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Last Name
            </label>
            <input
              {...register("last_name")}
              type="text"
              placeholder="Enter your last name"
              className="w-full bg-[#1E1E1E] text-white border border-[#2A2A2A] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
            />
          </div>

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
              Sign Up
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <p className="text-center text-[#AAAAAA] mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF7043] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
