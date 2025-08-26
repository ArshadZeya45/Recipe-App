import Banner from "../components/Banner";
import LatestRecipe from "../components/LatestRecipe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("home.jsx mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);
  return (
    <>
      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-24 py-5 sm:py-12 md:py-16">
        <Navbar />

        {/* Heading Section */}
        <h1 className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 md:text-6xl text-3xl font-bold md:w-[80%] w-full">
          <img
            className="w-24 sm:w-28 md:w-36 lg:w-44 object-contain"
            src="/chef.png"
            alt="Zaika Chef"
          />
          <span>
            <span className="text-[#FF7043]">ZAIKA</span>{" "}
            <span className="block sm:inline">
              – Taste. Tradition. Together.
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-2xl md:w-[70%] w-full leading-relaxed">
          A curated collection of recipes from everyday classics to gourmet
          delights. Cook, share, and enjoy the art of food with Zaika.
        </p>

        {/* Banner */}
        <Banner />

        {/* Latest Recipes */}
        <LatestRecipe />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
