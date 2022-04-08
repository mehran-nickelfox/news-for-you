import React, { Suspense } from "react";
import Header from "./components/shared/Header";
import Spinner from "./components/shared/Spinner";

import AppRouter from "./router";

function App() {
  return (
    <div className="z-10 items-center justify-center">
      <Header />
      <Suspense fallback={<Spinner />}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
