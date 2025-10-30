import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

// import "./index.css";

// Define your routes
const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "about", element: <About />, },
  { path: "membership", element: <Membership />, },
  { path: "contact", element: <Contact />, },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
