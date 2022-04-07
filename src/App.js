import React, { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/shared/Header";
import Loader from "./components/shared/Loader";
import AppRouter from "./router";

function App() {
  return (
    <AnimatePresence>
      <div className="z-10 items-center justify-center">
        <Header />
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </div>
    </AnimatePresence>
  );
}

export default App;
