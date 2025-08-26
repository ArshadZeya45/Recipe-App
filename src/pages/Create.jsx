import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    recipe.isFav = false;
    setdata([recipe, ...data]);
    toast.success("Recipe Created Successfully");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-2xl bg-[#151515] rounded-2xl shadow-lg p-6 sm:p-8 border border-[#2A2A2A]">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-6 text-center">
          Create a New Recipe
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Recipe Image URL
            </label>
            <input
              {...register("image_url")}
              required
              type="url"
              placeholder="https://example.com/recipe.jpg"
              className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                 focus:outline-none focus:ring-2 focus:ring-[#FF7043] text-sm sm:text-base"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Recipe Title
            </label>
            <input
              required
              {...register("recipe_title")}
              type="text"
              placeholder="e.g. Paneer Butter Masala"
              className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                 focus:outline-none focus:ring-2 focus:ring-[#FF7043] text-sm sm:text-base"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Category
            </label>
            <select
              required
              {...register("category")}
              className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                 focus:outline-none focus:ring-2 focus:ring-[#FF7043] text-sm sm:text-base"
            >
              <option value="">Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snacks">Snacks</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Description
            </label>
            <textarea
              required
              {...register("description")}
              rows="3"
              placeholder="Write a short description..."
              className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                 focus:outline-none focus:ring-2 focus:ring-[#FF7043] text-sm sm:text-base"
            ></textarea>
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Ingredients
            </label>
            <textarea
              required
              {...register("ingredients")}
              rows="4"
              placeholder="List the ingredients separated by commas..."
              className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                 focus:outline-none focus:ring-2 focus:ring-[#FF7043] text-sm sm:text-base"
            ></textarea>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Instructions
            </label>
            <textarea
              required
              {...register("instructions")}
              rows="5"
              placeholder="Step by step cooking instructions..."
              className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                 focus:outline-none focus:ring-2 focus:ring-[#FF7043] text-sm sm:text-base"
            ></textarea>
          </div>

          {/* Chef */}
          <div>
            <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
              Chef Name
            </label>
            <input
              required
              {...register("chef_name")}
              type="text"
              placeholder="e.g. Rahul Kumar"
              className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                 focus:outline-none focus:ring-2 focus:ring-[#FF7043] text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#FF7043] text-[#151515] font-semibold py-3 rounded-xl shadow-md cursor-pointer
                 hover:bg-opacity-90 transition text-sm sm:text-base"
            >
              Create New Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
