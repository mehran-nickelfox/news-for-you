import React from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { authAtom } from "../jotai/Atoms";
import OAuth from "../components/OAuth/OAuth";
const Home = () => {
  const [user] = useAtom(authAtom);

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%", transition: { duration: 0.2 } }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
          className="absolute bottom-1/2 text-center w-full mb-12"
        >
          <h1 className="text-white font-bold text-6xl">
            THE NAME YOU CAN NEWS
          </h1>
          <br />
          <h1 className="text-white font-bold text-6xl">UPON!</h1>
        </motion.div>
        {!user && (
          <>
            <OAuth />
          </>
        )}
      </motion.div>
    </>
  );
};

export default Home;
