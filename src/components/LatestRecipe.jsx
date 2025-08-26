import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const LatestRecipe = () => {
  const { data } = useContext(recipecontext);

  return (
    <div className="py-8 sm:py-12">
      {/* Heading */}
      <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">
        Latest Recipes
      </h1>

      {/* Cards Grid */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 6).map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/details/${recipe.id}`}
            className="block bg-[#151515] border border-[#2A2A2A] rounded-2xl shadow-lg overflow-hidden 
                       hover:scale-[1.02] transition-transform cursor-pointer relative"
          >
            {/* Category Badge */}
            <div className="absolute right-3 top-3 z-40 rounded-lg bg-yellow-300">
              <p className="text-green-800 font-semibold py-1 px-2 text-xs sm:text-sm">
                {recipe.category}
              </p>
            </div>
            {recipe.isFav ? (
              <Heart color="#d51010" className="absolute bottom-2 right-2" />
            ) : (
              ""
            )}

            {/* Recipe Image */}
            <div className="h-40 sm:h-48 md:h-56 w-full overflow-hidden">
              <img
                src={recipe.image_url}
                alt={recipe.recipe_title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5">
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2 line-clamp-1">
                {recipe.recipe_title}
              </h3>

              {/* Chef Name */}
              <p className="text-xs sm:text-sm text-[#AAAAAA] mb-3">
                👨‍🍳 {recipe.chef_name}
              </p>

              {/* Description */}
              <p className="text-[#CCCCCC] text-sm leading-relaxed line-clamp-3">
                {recipe.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestRecipe;
