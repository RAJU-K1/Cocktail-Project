import React from 'react'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomeLayout from './pages/HomeLayout';
import About from './pages/About';
import NewsLetter from './pages/NewsLetter';
import Cocktail from './pages/Cocktail';
import Landing from './pages/Landing';
import Error from './pages/Error';
import {loader as landingLoader } from "./pages/Landing"
import {loader as singleCocktailLoader } from "./pages/Cocktail"
import SinglePageError from './pages/SinglePageError';
import {action as newsletterAction} from  "./pages/NewsLetter"
const router=createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      { 
        index:true,
        element: <Landing/>,
        errorElement:<SinglePageError/>,
        loader:landingLoader,
      },
      {
        path:"cocktail/:id",
        element:<Cocktail/>,
        loader:singleCocktailLoader,
        errorElement:<SinglePageError/>
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"newsletter",
        element:<NewsLetter/>,
        action:newsletterAction,
      },
     
      
    ]
  },
])

 
const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App