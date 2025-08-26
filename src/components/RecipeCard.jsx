import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipes/details/${recipe.id}`}
      className="block bg-[#151515] border border-[#2A2A2A] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer relative"
    >
      <div className="absolute bg-[yellow]  right-3 text-center top-3 z-40 rounded-lg">
        <p className="text-green-800 capitalize font-semibold py-1 px-2  text-xs">
          {recipe.category}
        </p>
      </div>
      {recipe.isFav ? (
        <Heart color="#d51010" className="absolute bottom-2 right-2" />
      ) : (
        ""
      )}
      {/* Recipe Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={recipe.image_url}
          alt={recipe.recipe_title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl capitalize font-semibold text-[#F5F5F5] mb-2">
          {recipe.recipe_title}
        </h3>

        {/* Chef Name */}
        <p className="text-sm text-[#AAAAAA] mb-3">👨‍🍳 {recipe.chef_name}</p>

        {/* Description */}
        <p className="text-[#CCCCCC] text-sm leading-relaxed line-clamp-3">
          {recipe.description.slice(0, 30)}
          <small className="text-zinc-600">...</small>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
