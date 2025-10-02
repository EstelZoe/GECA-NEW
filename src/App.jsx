import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Home/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

