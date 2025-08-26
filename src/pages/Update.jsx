import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const Update = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const params = useParams();
  const updateRecipe = data.find((recipe) => recipe.id == params.id);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipeData) => {
    const updatedRecipe = data.map((el) => {
      if (el.id == params.id) {
        return {
          id: el.id,
          ...recipeData,
          category: recipeData.category.toLowerCase(),
          ingredients: recipeData.ingredients,
          instructions: recipeData.instructions,
        };
      }
      return el;
    });

    setdata(updatedRecipe);
    reset();
    toast.success("Recipe Updated Successfully");
    navigate("/recipes");
  };

  return (
    <>
      <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-[#151515] rounded-2xl shadow-lg p-6 md:p-8 border border-[#2A2A2A]">
          <h2 className="text-xl md:text-2xl font-semibold text-[#F5F5F5] mb-6 text-center">
            Update The Recipe
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                Recipe Image URL
              </label>
              <input
                defaultValue={updateRecipe.image_url}
                {...register("image_url")}
                required
                type="url"
                placeholder="https://example.com/recipe.jpg"
                className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                   focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                Recipe Title
              </label>
              <input
                defaultValue={updateRecipe.recipe_title}
                required
                {...register("recipe_title")}
                type="text"
                placeholder="e.g. Paneer Butter Masala"
                className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                   focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                Category
              </label>
              <select
                defaultValue={updateRecipe.category?.toLowerCase()}
                required
                {...register("category")}
                className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                   focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
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
                defaultValue={updateRecipe.description}
                required
                {...register("description")}
                rows="3"
                placeholder="Write a short description..."
                className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                   focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
              ></textarea>
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                Ingredients
              </label>
              <textarea
                defaultValue={updateRecipe.ingredients}
                required
                {...register("ingredients")}
                rows="4"
                placeholder="List the ingredients seperated by commas..."
                className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                   focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
              ></textarea>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                Instructions
              </label>
              <textarea
                defaultValue={updateRecipe.instructions}
                required
                {...register("instructions")}
                rows="5"
                placeholder="Step by step cooking instructions..."
                className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                   focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
              ></textarea>
            </div>

            {/* Chef Name */}
            <div>
              <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                Chef Name
              </label>
              <input
                defaultValue={updateRecipe.chef_name}
                required
                {...register("chef_name")}
                type="text"
                placeholder="e.g. Rahul kumar"
                className="w-full bg-[#1E1E1E] text-[#F5F5F5] border border-[#2A2A2A] rounded-xl p-3 
                   focus:outline-none focus:ring-2 focus:ring-[#FF7043]"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#FF7043] text-[#151515] font-semibold py-3 rounded-xl shadow-md cursor-pointer
                   hover:bg-opacity-90 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
