import React from "react";
import { Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import Waves from "../assets/data/waves.mp4";
import { authAtom } from "../jotai/Atoms";
import OAuth from "../components/OAuth/OAuth";
const Home = () => {
  const [user] = useAtom(authAtom);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute bottom-1/2 text-center w-full mb-12">
        <h1 className="text-white font-bold text-6xl">THE NAME YOU CAN NEWS</h1>
        <br />
        <h1 className="text-white font-bold text-6xl">UPON!</h1>
      </div>
      {!user && (
        <>
          <OAuth />
        </>
      )}
      <div className=" sticky top-0 h-screen -z-50">
        <video
          autoPlay
          loop
          muted
          bg-cover="true"
          className="overflow-visible md-invisible bg-cover absolute -z-50  min-h-full min-w-full max-w-none"
        >
          <source src={Waves} type="video/mp4" />
        </video>
      </div>

      <Outlet />
    </motion.div>
  );
};

export default Home;
