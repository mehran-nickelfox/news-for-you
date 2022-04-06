import React from "react";
import Home from "../pages/Home";
import News from "../pages/News";
const allPaths = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  { path: "news", element: <News /> },
];

export default allPaths;
