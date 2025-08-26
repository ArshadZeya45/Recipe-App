import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Favourite = () => {
  const { data } = useContext(recipecontext);

  const favElem = data.filter((el, idx) => el.isFav == true);

  return (
    <>
      <div className="w-full min-h-screen px-5 sm:px-8 md:px-16 lg:px-24 py-5 sm:py-12 md:py-16">
        <Navbar />
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
          Your Favourite Recipes
        </h1>

        {/* Recipes Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favElem.length == 0 ? (
            <p>You have not added any favourite items yet</p>
          ) : (
            favElem.reverse().map((el, idx) => {
              return <RecipeCard key={idx} recipe={el} />;
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourite;
