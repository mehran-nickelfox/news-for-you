import React from "react";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../../jotai/Atoms";
import fb from "../../assets/images/fb.png";
import ig from "../../assets/images/ig.png";
const Footer = () => {
  const [user] = useAtom(authAtom);
  return (
    <footer className="absolute bottom-100 footer-1 bg-slate-700 text-white abolute py-8 sm:py-12 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Cool stuff
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Random feature
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team feature
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Stuff for developers
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another one
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Last time
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource name
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another resource
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Final resource
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Locations
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Privacy
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Terms
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Support
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Help Center
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <NavLink
                to="#"
                className="w-12 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <img src={fb} alt="fb" />
              </NavLink>
              <NavLink
                to="#"
                className="w-12 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <img src={ig} alt="ig" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>FWR</strong>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              XXX XXX XXX
              <br />
              XXXXXXXX XXX XXXXX
            </address>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>.<br />
            </p>
          </div>
          {!user ? (
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
              <button
                className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
              <button
                className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Scroll To Top
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
