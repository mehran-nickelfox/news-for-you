import React from "react";
import { useRoutes } from "react-router-dom";
import allPaths from "./routes";
const AppRouter = () => {
  const Routes = useRoutes(allPaths);
  return <> {Routes}</>;
};

export default AppRouter;
