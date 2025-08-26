import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-[#1E1E1E] text-[#F5F5F5] px-5 py-5 md:px-25">
        <Navbar />
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-center text-[#FF7043] mb-8">
            About <span className="text-white">Zaika</span>
          </h1>

          {/* Intro Section */}
          <p className="text-lg md:text-xl text-center text-[#CCCCCC] leading-relaxed mb-12">
            Welcome to{" "}
            <span className="text-[#FF7043] font-semibold">Zaika</span>, your
            one-stop destination for delicious recipes from every corner of the
            world. Whether you are a beginner in the kitchen or a seasoned chef,
            Zaika brings together a curated collection of recipes – from
            everyday comfort food to gourmet delights. Cook, share, and enjoy
            the art of food with us!
          </p>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#151515] rounded-2xl p-6 shadow-lg border border-[#2A2A2A]">
              <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">
                🍳 Easy to Cook
              </h2>
              <p className="text-[#CCCCCC]">
                Step-by-step recipes with clear instructions to make cooking
                simple and fun.
              </p>
            </div>
            <div className="bg-[#151515] rounded-2xl p-6 shadow-lg border border-[#2A2A2A]">
              <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">
                🥗 Variety of Cuisines
              </h2>
              <p className="text-[#CCCCCC]">
                Explore Indian, Continental, Chinese, Italian, and many more
                cuisines in one place.
              </p>
            </div>
            <div className="bg-[#151515] rounded-2xl p-6 shadow-lg border border-[#2A2A2A]">
              <h2 className="text-2xl font-semibold text-[#FF7043] mb-3">
                👩‍🍳 Chef’s Special
              </h2>
              <p className="text-[#CCCCCC]">
                Learn secret tips and tricks from professional chefs to upgrade
                your cooking skills.
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zaika –{" "}
              <span className="text-[#FF7043]">
                Taste. Tradition. Together.
              </span>
            </h2>
            <p className="text-[#CCCCCC] text-lg md:w-3/4 mx-auto">
              Food is not just about taste, it’s about emotions and memories.
              With Zaika, we aim to bring people closer through the joy of
              cooking and sharing recipes that carry tradition and love.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
