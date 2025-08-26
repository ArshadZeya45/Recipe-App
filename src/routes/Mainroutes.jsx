import React, { useContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import RecipeDetail from "../pages/RecipeDetail";
import Update from "../pages/Update";
import Favourite from "../pages/Favourite";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { recipecontext } from "../context/RecipeContext";

const MainRoutes = () => {
  const { authUser, setAuthUser } = useContext(recipecontext);
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/recipes" element={<Recipes></Recipes>}></Route>
      <Route
        path="/recipes/details/:id"
        element={<RecipeDetail></RecipeDetail>}
      ></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/favourite" element={<Favourite></Favourite>}></Route>
      <Route
        path="/create-recipe"
        element={authUser ? <Create /> : <Navigate to="/login" replace />}
      ></Route>
      <Route
        path="/update-recipe/:id"
        element={authUser ? <Update /> : <Navigate to="/login" replace />}
      ></Route>
    </Routes>
  );
};

export default MainRoutes;
