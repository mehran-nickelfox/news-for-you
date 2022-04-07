import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import allPaths from "./routes";
const AppRouter = () => {
  const Routes = useRoutes(allPaths);
  const location = useLocation();
  return (
    <div location={location} key={location.pathname}>
      {Routes}
    </div>
  );
};

export default AppRouter;
