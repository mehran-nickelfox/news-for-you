import React from "react";
import PrivateRoute from "../HOC/authWrapper";
import BooksMarks from "../pages/BooksMarks";
import Home from "../pages/Home";
import News from "../pages/News";
const allPaths = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          { path: ":news", element: <News /> },
          { path: "bookmarks", element: <BooksMarks/> },
        ],
      },
    ],
  },
];

export default allPaths;
