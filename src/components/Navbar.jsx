import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile sidebar state
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile dropdown state
  const { data, authUser, setAuthUser } = useContext(recipecontext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setAuthUser(null);
    localStorage.setItem("auth", JSON.stringify(false));
    toast.success("Logout Successfully");
    navigate("/");
    setIsProfileOpen(false);
    setIsMobileOpen(false);
  };

  return (
    <nav className="w-full bg-[#151515] border-b border-[#2A2A2A] px-5 py-3 mb-6 rounded-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/zaika.png"
            alt="logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <h2
            className="text-3xl font-thin text-white"
            style={{ fontFamily: "'Cedarville Cursive', cursive" }}
          >
            Zaika
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-md text-white">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/favourite"
            className={`${({ isActive }) =>
              isActive ? "text-orange-500" : ""} relative px-3 py-1 rounded-md`}
          >
            <span className="absolute -top-3 -right-1 bg-[#FF7043] flex items-center justify-center rounded-full h-6 w-6 font-semibold text-white">
              {data.filter((el) => el.isFav).length}
            </span>
            Favourites
          </NavLink>
          <NavLink
            to="/create-recipe"
            className="px-4 py-2 rounded-md font-semibold bg-[#FF7043] text-[#151515]"
          >
            + Create Recipe
          </NavLink>
          {authUser ? (
            <div className="relative">
              {/* User Icon */}
              <div
                onClick={() => setIsProfileOpen((prev) => !prev)}
                className="px-4 relative font-semibold text-md py-3 rounded-full bg-green-800 cursor-pointer"
              >
                <p className="uppercase text-white">
                  {authUser.first_name.slice(0, 1)}
                </p>
              </div>

              {/* Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#1f1f1f] rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-zinc-700">
                    <p className="text-white font-semibold">
                      {authUser.first_name} {authUser.last_name}
                    </p>
                    <p className="text-sm text-zinc-400">{authUser.email}</p>
                  </div>
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-900/40 rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-md font-semibold bg-[#FF7043] text-[#151515]"
            >
              Sign In
            </NavLink>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#1f1f1f] shadow-xl z-50 flex flex-col p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="self-end mb-6 text-white"
            >
              <X size={28} />
            </button>

            {/* User Info */}
            {authUser ? (
              <div className="flex flex-col items-start gap-2 mb-6">
                <div className="bg-green-800 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  {authUser.first_name.slice(0, 1)}
                </div>
                <p className="text-lg text-white font-semibold">
                  {authUser.first_name} {authUser.last_name}
                </p>
                <p className="text-sm text-zinc-400">{authUser.email}</p>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="mb-6 px-4 py-2 rounded-md font-semibold bg-[#FF7043] text-[#151515] w-full text-center"
                onClick={() => setIsMobileOpen(false)}
              >
                Sign In
              </NavLink>
            )}

            {/* Links */}
            <nav className="flex flex-col gap-5 text-white">
              <NavLink
                to="/"
                className="hover:text-orange-500"
                onClick={() => setIsMobileOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/recipes"
                className="hover:text-orange-500"
                onClick={() => setIsMobileOpen(false)}
              >
                Recipes
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-orange-500"
                onClick={() => setIsMobileOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/favourite"
                className="relative hover:text-orange-500"
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="absolute -top-3 -right-5 bg-[#FF7043] flex items-center justify-center rounded-full h-6 w-6 font-semibold text-white">
                  {data.filter((el) => el.isFav).length}
                </span>
                Favourites
              </NavLink>
              <NavLink
                to="/create-recipe"
                className="px-4 py-2 rounded-md font-semibold bg-[#FF7043] text-[#151515] w-fit"
                onClick={() => setIsMobileOpen(false)}
              >
                + Create Recipe
              </NavLink>
            </nav>

            {/* Logout Button */}
            {authUser && (
              <button
                onClick={logoutHandler}
                className="mt-auto cursor-pointer bg-red-800 px-5 py-2 rounded-lg text-white font-semibold"
              >
                Logout
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
