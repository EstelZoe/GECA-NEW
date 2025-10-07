import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

// Define your routes
const router = createBrowserRouter([
  { path: "/", element: <Home />, },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
