import React from "react";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { getAuth } from "firebase/auth";
import { authAtom } from "../../jotai/Atoms";
import logo from "../../assets/images/logos.png";
import logout from "../../assets/images/logout.png";
const Header = () => {
  const auth = getAuth();
  const [user, setUser] = useAtom(authAtom);

  const handleClick = () => {
    auth.signOut();
    setUser(false);
  };
  return (
    <div className=" z-50 sticky flex top-0 h-20 bg-slate-700 w-full justify-between ">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-36 ml-2" />
        </NavLink>
      </div>
      <div className="flex items-center w-60 mr-8 justify-between text-white">
        {user && (
          <>
            <NavLink to="/news" className="text-2xl font-bold ">
              News
            </NavLink>
            <NavLink to="/bookmarks" className="text-2xl font-bold ">
              Bookmarks
            </NavLink>
            <button onClick={handleClick}>
              <img src={logout} alt="power" className="w-8 " />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
