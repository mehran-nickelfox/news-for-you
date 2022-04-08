import React from "react";
import { Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import Waves from "../assets/data/waves.mp4";
import { authAtom } from "../jotai/Atoms";
import OAuth from "../HOC/OAuth";
const Home = () => {
  const [user] = useAtom(authAtom);
  return (
    <>
      <div className=" sticky top-0 h-screen -z-10">
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
      {!user && (
        <>
          <OAuth />
        </>
      )}
      <Outlet />
    </>
  );
};

export default Home;
