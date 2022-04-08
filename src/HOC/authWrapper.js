import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../jotai/Atoms";

const PrivateRoute = ({ children }) => {
  const [user] = useAtom(authAtom);

  return user ? <Outlet>{children}</Outlet> : <Navigate to="/" />;
};

export default PrivateRoute;
