import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  let recipeItems = [
    {
      id: 1,
      recipe_title: "Paneer Butter Masala",
      category: "Dinner",
      chef_name: "Chef Ananya",
      description:
        "Rich and creamy paneer curry cooked with butter and aromatic spices.",
      image_url:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/paneer-butter-masala.png",
      ingredients: "Paneer, Butter, Tomatoes, Cream, Spices",
      instructions:
        "Heat butter and sauté onions.\nAdd tomatoes and cook until soft.\nBlend into a smooth paste.\nCook with cream and spices.\nAdd paneer cubes and simmer.",
      isFav: false,
    },
    {
      id: 2,
      recipe_title: "Aloo Paratha",
      category: "Breakfast",
      chef_name: "Chef Rohan",
      description: "Stuffed Indian flatbread with spiced mashed potatoes.",
      image_url:
        "https://www.shutterstock.com/image-photo/aloo-paratha-popular-north-indian-600nw-2547389027.jpg",
      ingredients: "Wheat flour, Potatoes, Green chilies, Coriander, Ghee",
      instructions:
        "Prepare dough with wheat flour.\nBoil and mash potatoes with spices.\nStuff mixture into dough and roll.\nCook on tawa with ghee until golden.",
      isFav: false,
    },
    {
      id: 3,
      recipe_title: "Masala Dosa",
      category: "Breakfast",
      chef_name: "Chef Kavya",
      description: "Crispy dosa stuffed with spicy potato filling.",
      image_url:
        "https://delishglobe.com/wp-content/uploads/2024/09/Masala-dosa-1-500x500.png",
      ingredients: "Dosa batter, Potatoes, Onions, Mustard seeds, Curry leaves",
      instructions:
        "Prepare dosa batter.\nCook potato filling with onions and spices.\nSpread dosa on hot tawa.\nPlace filling and fold dosa.\nServe with chutney and sambar.",
      isFav: false,
    },
    {
      id: 4,
      recipe_title: "Veg Biryani",
      category: "Lunch",
      chef_name: "Chef Sameer",
      description: "Fragrant rice cooked with vegetables and aromatic spices.",
      image_url:
        "https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=",
      ingredients: "Basmati rice, Mixed vegetables, Onions, Spices, Saffron",
      instructions:
        "Soak rice and parboil it.\nCook vegetables with spices.\nLayer rice and vegetables.\nAdd saffron milk and steam cook.\nServe hot with raita.",
      isFav: false,
    },
    {
      id: 5,
      recipe_title: "Chole Bhature",
      category: "Lunch",
      chef_name: "Chef Neha",
      description: "Spicy chickpea curry served with fluffy fried bread.",
      image_url:
        "https://cdn.uengage.io/uploads/28289/image-14DG1B-1723180624.jpg",
      ingredients: "Chickpeas, Tomatoes, Onions, Flour, Spices",
      instructions:
        "Soak and boil chickpeas.\nCook curry with onions and tomatoes.\nPrepare dough and roll bhature.\nDeep fry until golden.\nServe hot with chole.",
      isFav: false,
    },
    {
      id: 6,
      recipe_title: "Pav Bhaji",
      category: "Snacks",
      chef_name: "Chef Mehul",
      description: "Spicy mashed vegetable curry served with buttered pav.",
      image_url:
        "https://media.istockphoto.com/id/1327433011/photo/pav-bhaji-indian-street-food-bharuch-gujarat-india.jpg?s=612x612&w=0&k=20&c=R_Nl3Ig6qTNMidQkjXH0It8MINDJY-C5GMiIv-HxO04=",
      ingredients: "Potatoes, Cauliflower, Peas, Pav buns, Butter",
      instructions:
        "Boil and mash vegetables.\nCook with spices and butter.\nToast pav with butter.\nServe hot with onions and lemon.",
      isFav: false,
    },
    {
      id: 7,
      recipe_title: "Idli Sambhar",
      category: "Breakfast",
      chef_name: "Chef Aditi",
      description: "Soft steamed idlis served with spicy sambhar.",
      image_url:
        "https://media.istockphoto.com/id/2159618247/photo/idli-vada-with-sambar.jpg?s=612x612&w=0&k=20&c=0HNP26WxESqfA3i3Xr1uTxxpKKYc69d9NRn9Dai4xok=",
      ingredients: "Idli batter, Toor dal, Tamarind, Vegetables, Spices",
      instructions:
        "Steam idlis in moulds.\nCook sambhar with dal and tamarind.\nTemper with spices.\nServe hot with chutney.",
      isFav: false,
    },
    {
      id: 8,
      recipe_title: "Chicken Curry",
      category: "Dinner",
      chef_name: "Chef Rajeev",
      description: "Flavorful chicken curry with rich spices.",
      image_url:
        "https://www.foodiaq.com/wp-content/uploads/2024/11/Chicken-Curry.jpg",
      ingredients: "Chicken, Onions, Tomatoes, Garlic, Spices",
      instructions:
        "Marinate chicken with spices.\nCook onions and tomatoes.\nAdd chicken and simmer.\nServe hot with rice.",
      isFav: false,
    },
    {
      id: 9,
      recipe_title: "Veg Pulao",
      category: "Lunch",
      chef_name: "Chef Ishita",
      description: "Light and aromatic rice with vegetables.",
      image_url:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG",
      ingredients: "Basmati rice, Carrots, Beans, Spices, Ghee",
      instructions:
        "Soak rice and drain.\nCook vegetables with spices.\nAdd rice and water.\nSimmer until rice is fluffy.",
      isFav: false,
    },
    {
      id: 10,
      recipe_title: "Dhokla",
      category: "Snacks",
      chef_name: "Chef Pooja",
      description: "Steamed gram flour cake with tempering.",
      image_url:
        "https://maayeka.com/wp-content/uploads/2011/11/sooji-ka-dhokla-instant-recipe-1-of-1-500x500.jpg",
      ingredients:
        "Gram flour, Curd, Green chilies, Mustard seeds, Curry leaves",
      instructions:
        "Prepare batter with gram flour and curd.\nSteam until fluffy.\nTemper with mustard seeds and curry leaves.\nServe with chutney.",
      isFav: false,
    },
    {
      id: 11,
      recipe_title: "Rasgulla",
      category: "Snacks",
      chef_name: "Chef Bhavna",
      description: "Soft and spongy Bengali sweet made from chenna.",
      image_url:
        "https://prashantcorner.com/cdn/shop/products/RASGULLA_2457ea2c-400a-4130-b540-b77966e63d07.jpg?v=1673073151&width=1946",
      ingredients: "Milk, Sugar, Lemon juice, Cardamom",
      instructions:
        "Curdle milk and extract chenna.\nKnead into smooth dough.\nMake balls and cook in sugar syrup.\nCool before serving.",
      isFav: false,
    },
    {
      id: 12,
      recipe_title: "Butter Naan",
      category: "Dinner",
      chef_name: "Chef Arjun",
      description: "Soft and fluffy tandoori naan brushed with butter.",
      image_url:
        "https://t3.ftcdn.net/jpg/08/95/50/04/360_F_895500474_IDUMxbOGEBn29tyPyjG8oLEEWlK8ZlOg.jpg",
      ingredients: "Flour, Yeast, Milk, Butter, Salt",
      instructions:
        "Prepare dough with flour and yeast.\nRest and roll naans.\nCook in tandoor or pan.\nBrush with butter.",
      isFav: false,
    },
    {
      id: 13,
      recipe_title: "Momos",
      category: "Snacks",
      chef_name: "Chef Sonam",
      description: "Steamed dumplings stuffed with veggies.",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhrelgj2VUN-uTrk46aiy9wX3QDjLi-bDBA&s",
      ingredients: "Flour, Cabbage, Carrot, Soy sauce, Garlic",
      instructions:
        "Prepare dough with flour.\nMake stuffing with vegetables.\nFill and shape momos.\nSteam until cooked.",
      isFav: false,
    },
    {
      id: 14,
      recipe_title: "Fish Curry",
      category: "Dinner",
      chef_name: "Chef Shreya",
      description: "Tangy and spicy fish curry cooked in coconut milk.",
      image_url:
        "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min.jpg",
      ingredients: "Fish, Coconut milk, Tamarind, Spices",
      instructions:
        "Marinate fish with turmeric.\nCook curry with coconut milk.\nAdd tamarind and spices.\nSimmer fish until cooked.",
      isFav: false,
    },
    {
      id: 15,
      recipe_title: "Shahi Paneer",
      category: "Dinner",
      chef_name: "Chef Tanya",
      description: "Royal paneer curry with cashew and cream.",
      image_url:
        "https://tiffinandteaofficial.com/wp-content/uploads/2020/07/Untitled-1.jpg",
      ingredients: "Paneer, Cashews, Cream, Spices",
      instructions:
        "Soak cashews and grind.\nCook with onions and spices.\nAdd cream and paneer.\nSimmer until thick.",
      isFav: false,
    },
    {
      id: 16,
      recipe_title: "Poha",
      category: "Breakfast",
      chef_name: "Chef Deepak",
      description: "Flattened rice cooked with onions, peanuts and spices.",
      image_url:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha.jpg",
      ingredients: "Poha, Onions, Peanuts, Mustard seeds, Curry leaves",
      instructions:
        "Soak poha lightly.\nSauté onions and peanuts.\nAdd poha and spices.\nCook for few minutes.",
      isFav: false,
    },
    {
      id: 17,
      recipe_title: "Fried Rice",
      category: "Lunch",
      chef_name: "Chef Vikas",
      description: "Indo-Chinese fried rice with vegetables.",
      image_url:
        "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/05/04111234/chicken-fried-rice-low-res-2.png",
      ingredients: "Rice, Carrot, Beans, Soy sauce, Garlic",
      instructions:
        "Cook rice and cool.\nStir-fry vegetables.\nAdd rice and sauces.\nMix well and serve.",
      isFav: false,
    },
    {
      id: 18,
      recipe_title: "Rajma Chawal",
      category: "Lunch",
      chef_name: "Chef Manish",
      description: "Red kidney beans curry served with steamed rice.",
      image_url:
        "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1-500x375.jpg",
      ingredients: "Rajma, Onions, Tomatoes, Rice, Spices",
      instructions:
        "Soak and cook rajma.\nPrepare curry with onions and tomatoes.\nServe hot with rice.",
      isFav: false,
    },
    {
      id: 19,
      recipe_title: "Pani Puri",
      category: "Snacks",
      chef_name: "Chef Nidhi",
      description: "Crispy puris filled with spicy and tangy water.",
      image_url:
        "https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg",
      ingredients: "Puris, Potatoes, Tamarind water, Chutneys, Spices",
      instructions:
        "Prepare stuffing with potatoes.\nMake tangy water with tamarind.\nFill puris with stuffing and water.\nServe immediately.",
      isFav: false,
    },
    {
      id: 20,
      recipe_title: "Egg Curry",
      category: "Dinner",
      chef_name: "Chef Reema",
      description: "Boiled eggs cooked in spicy curry.",
      image_url:
        "https://www.spicebangla.com/wp-content/uploads/2024/08/Egg-Masala-Curry.webp",
      ingredients: "Eggs, Onions, Tomatoes, Spices",
      instructions:
        "Boil and peel eggs.\nCook curry with onions and tomatoes.\nAdd eggs and simmer.\nServe hot with rice or roti.",
      isFav: false,
    },
    {
      id: 21,
      recipe_title: "Sandwich",
      category: "Breakfast",
      chef_name: "Chef Anil",
      description: "Quick veggie sandwich with chutney and butter.",
      image_url:
        "https://www.tasteofhome.com/wp-content/uploads/2025/04/Turkey-Club-Sandwich_FT25_278726_EC_0408_5.jpg?fit=700,1024",
      ingredients: "Bread, Butter, Cucumber, Tomato, Chutney",
      instructions:
        "Spread butter and chutney on bread.\nAdd sliced veggies.\nGrill or serve fresh.",
      isFav: false,
    },
    {
      id: 22,
      recipe_title: "Pizza",
      category: "Dinner",
      chef_name: "Chef Rahul",
      description: "Cheesy pizza topped with vegetables and herbs.",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9c4T8ahaLDklv9SRpAWhrYIyRZYuphaLPg&s",
      ingredients: "Pizza base, Cheese, Tomato sauce, Veggies",
      instructions:
        "Spread sauce on base.\nAdd toppings and cheese.\nBake until crust is golden.",
      isFav: false,
    },
    {
      id: 23,
      recipe_title: "Bhel Puri",
      category: "Snacks",
      chef_name: "Chef Priya",
      description: "Crispy puffed rice snack with chutneys.",
      image_url:
        "https://www.masala.tv/wp-content/uploads/2020/05/bhel-puri-548-1024x576.jpg",
      ingredients: "Puffed rice, Sev, Onions, Tomatoes, Chutneys",
      instructions:
        "Mix puffed rice with chutneys.\nAdd veggies and sev.\nServe fresh.",
      isFav: false,
    },
    {
      id: 24,
      recipe_title: "Samosa",
      category: "Snacks",
      chef_name: "Chef Aarav",
      description: "Crispy fried snack stuffed with spiced potatoes.",
      image_url:
        "https://media.istockphoto.com/id/2148933061/photo/selective-focus-samosa-spiced-potato-filled-pastry-crispy-savory-popular-indian-snack-with.jpg?s=612x612&w=0&k=20&c=HW1y3HYPa7r-YwB6wn3gktZP-1Fzw9bYKsR8D6yqQOs=",
      ingredients: "Flour, Potatoes, Green peas, Spices",
      instructions:
        "Prepare dough with flour.\nMake stuffing with potatoes and peas.\nShape samosas and fry.\nServe hot with chutney.",
      isFav: false,
    },
    {
      id: 25,
      recipe_title: "Dal Tadka",
      category: "Dinner",
      chef_name: "Chef Sneha",
      description: "Yellow lentils tempered with ghee and spices.",
      image_url:
        "https://i0.wp.com/www.dhabastyle.com/wp-content/uploads/2017/04/maxresdefault-1.jpg?fit=1100%2C619&ssl=1",
      ingredients: "Toor dal, Ghee, Garlic, Onions, Spices",
      instructions:
        "Boil dal until soft.\nPrepare tadka with ghee and spices.\nAdd to dal and simmer.\nServe hot with rice or roti.",
      isFav: false,
    },
  ];

  const [data, setdata] = useState([]);
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("recipes"));
    if (!items) {
      localStorage.setItem("recipes", JSON.stringify(recipeItems));
      setdata(recipeItems);
    } else {
      setdata(items);
    }
  }, []);
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAuthUser(user);
      return;
    }
    setAuthUser(null);
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);
  return (
    <recipecontext.Provider value={{ data, setdata, authUser, setAuthUser }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
