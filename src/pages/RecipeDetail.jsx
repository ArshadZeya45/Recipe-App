import React, { useContext } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { Heart } from "lucide-react";

const RecipeDetail = () => {
  const navigate = useNavigate();
  const { data, setdata, authUser } = useContext(recipecontext);
  const params = useParams();

  const singleRecipe = data.find((recipe) => params.id == recipe.id);

  const deleteHandler = (id) => {
    if (!authUser) {
      navigate("/login");
      return;
    }
    const filteredData = data.filter((el) => el.id != id);
    setdata(filteredData);
    toast.success("Recipe Deleted Successfully");
    navigate("/recipes");
  };

  const addToFav = (id) => {
    const favItem = data.map((el, idx) => {
      if (el.id == id) {
        const updatedItem = {
          ...el,
          isFav: !el.isFav,
        };
        if (!el.isFav) {
          toast.success("Added to Favourites ❤️");
        } else {
          toast.error("Removed from Favourites ❌");
        }
        return updatedItem;
      }
      return el;
    });
    setdata(favItem);
    console.log(favItem);
  };

  return (
    <div className="max-w-6xl min-h-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Side - Image */}
        <div className="w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
          <img
            src={singleRecipe?.image_url}
            alt={singleRecipe?.recipe_title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Details */}
        <div className="space-y-6">
          {/* Title */}
          <div className="flex items-center gap-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-[#F5F5F5]">
              {singleRecipe?.recipe_title}
            </h1>
            {singleRecipe?.isFav ? (
              <Heart size={36} color="#d51010" className="mt-2" />
            ) : (
              ""
            )}
          </div>

          {/* Category & Chef */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <span className="bg-yellow-500 text-black px-2 sm:px-3 py-1 rounded-lg font-semibold capitalize">
              {singleRecipe?.category}
            </span>
            <span className="text-gray-300">👨‍🍳 {singleRecipe?.chef_name}</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            {singleRecipe?.description}
          </p>

          {/* Ingredients */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              📝 Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
              {singleRecipe?.ingredients.split("," || ".").map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              👩‍🍳 Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 text-sm sm:text-base">
              {singleRecipe?.instructions.split("," || ".").map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-8">
            <button
              onClick={() => addToFav(singleRecipe?.id)}
              className="px-4 py-2 bg-pink-700 text-white rounded-md cursor-pointer hover:bg-pink-800 transition"
            >
              {singleRecipe?.isFav
                ? "Remove from favourite"
                : "Add to Favourite"}
            </button>
            <div className="flex justify-between gap-5 text-center">
              <Link
                to={`/update-recipe/${singleRecipe?.id.toString()}`}
                className="w-full block px-4 py-2 bg-yellow-700 text-white rounded-md cursor-pointer hover:bg-yellow-800 transition"
              >
                Update
              </Link>
              <button
                onClick={() => deleteHandler(singleRecipe?.id)}
                className="w-full block px-4 py-2 bg-red-700 text-white rounded-md cursor-pointer hover:bg-red-800 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
