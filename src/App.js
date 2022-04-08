import React, { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/shared/Header";
import Loader from "./components/shared/Loader";
import AppRouter from "./router";
import Waves from "./assets/data/waves.mp4";
import Footer from "./components/shared/Footer";

function App() {
  console.log(process.env.REACT_APP_NWE_URL)
  return (
    <AnimatePresence>
      <div className="items-center justify-center">
        <Header />
        <Suspense fallback={<Loader />}>
          <div className=" sticky top-0 h-screen -z-50">
            <video
              autoPlay
              loop
              muted
              bg-cover="true"
              className="overflow-visible md-invisible bg-cover absolute -z-20  min-h-full min-w-full max-w-none"
            >
              <source src={Waves} type="video/mp4" />
            </video>
          </div>
          <AppRouter />
        </Suspense>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
