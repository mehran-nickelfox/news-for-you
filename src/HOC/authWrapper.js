import React from "react";
import { useAtom } from "jotai";
import { authAtom } from "../jotai/Atoms";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [user] = useAtom(authAtom);

  return user ? <Outlet /> : "";
};

export default PrivateRoute;
