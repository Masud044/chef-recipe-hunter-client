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
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    
     
         {
           path:'login',
           element:<Login></Login>
         },
         {
          path:'register',
          element:<Register></Register>
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
      element:<PrivateRoute><RecipeLayout></RecipeLayout></PrivateRoute>,
      children:[
         {
            path:':id',
            element: <RecipeDetails></RecipeDetails> ,
            
         }
      ]
    }
  ]);
  export default router;
  