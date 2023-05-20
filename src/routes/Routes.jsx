import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";


import Home from "../pages/Home";
import RecipeLayout from "../layout/recipelayout";
import RecipeDetails from "../pages/RecipeDetails";
import Blog from "../pages/Blog";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";


  const router = createBrowserRouter([
    {
      path:'layout',
      element:<LoginLayout></LoginLayout>,
      children:[
         {
           path:'login',
           element:<Login></Login>
         },
         {
          path:'register',
          element:<Register></Register>
         }
      ]
    },
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
  