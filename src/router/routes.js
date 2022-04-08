import React from "react";
import PrivateRoute from "../HOC/authWrapper";
import BooksMarks from "../pages/BooksMarks";
import Home from "../pages/Home";
import News from "../pages/News";
import NotFound from "../pages/NotFound";
const allPaths = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "",
    element: <PrivateRoute />,
    children: [
      { path: "news", element: <News /> },
      { path: "bookmarks", element: <BooksMarks /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default allPaths;
