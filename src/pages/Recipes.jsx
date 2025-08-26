import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  return (
    <>
      <div className="w-full min-h-screen px-5 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16">
        <Navbar />
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
          All Recipes
        </h1>

        {/* Recipes Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((recipe, idx) => (
            <RecipeCard key={idx} recipe={recipe} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
