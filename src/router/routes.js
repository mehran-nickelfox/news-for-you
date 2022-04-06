import React from "react";
import PrivateRoute from "../HOC/authWrapper";
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
        children: [{ path: ":news", element: <News /> }],
      },
    ],
  },
];

export default allPaths;
