import React from "react";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../../jotai/Atoms";
import logo from "../../assets/images/logos.png";
const Header = () => {
  const [user, setUser] = useAtom(authAtom);
  console.log(user);

  const handleClick = () => {
    setUser((prev) => !prev);
  };
  return (
    <div className=" sticky flex top-0 h-20 bg-slate-700 w-full justify-between ">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-36 ml-2" />
        </NavLink>
      </div>
      <div className="flex items-center w-56 mr-8 justify-between">
        <NavLink to="/" className="text-2xl font-bold text-zinc-500">
          Home
        </NavLink>
        <NavLink to="/news" className="text-2xl font-bold text-zinc-500">
          News
        </NavLink>
        <button onClick={handleClick} className="">SignIN</button>
      </div>
    </div>
  );
};

export default Header;
