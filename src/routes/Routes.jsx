import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";


import Home from "../pages/Home";
import RecipeLayout from "../layout/recipelayout";
import RecipeDetails from "../pages/RecipeDetails";
import Blog from "../pages/Blog";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
           {
             path:'/',
             element:<Home></Home>
           },
           
      ]
    },
    {
      path:'blog',
      element:<Blog></Blog>
     },
    
   
    {
      path:'recipe',
      element:<RecipeLayout></RecipeLayout>,
      children:[
         {
            path:':id',
            element:<RecipeDetails></RecipeDetails>,
            
         }
      ]
    }
  ]);
  export default router;
  