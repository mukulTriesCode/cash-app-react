import React, { useContext } from "react";
import homeLogo from "../assets/home.png";
import { Link } from "react-router-dom";
import ValContext from "../helpers/Context/ValContext";
import { CrossSVG, NavSVG } from "@/lib/Svgs";

const Sidebar: React.FC = () => {
  const context = useContext(ValContext);
  const { val, toggleVal } = context || {};

  const navLinks = [
    { path: "/", label: "Home", icon: homeLogo },
    { path: "/category", label: "Category", icon: homeLogo },
    { path: "/add-entry", label: "Add Entry", icon: homeLogo },
    { path: "/profile", label: "Profile", icon: homeLogo },
    { path: "/sign-up", label: "Sign Up", icon: homeLogo },
    { path: "/login", label: "Login", icon: homeLogo },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-[#131313] fixed z-[1000] border-r-[0.5px] border-white/10 h-screen transition-all duration-300 ${
          val ? "w-72" : "w-[88px] overflow-hidden"
        }`}
      >
        <div className={`flex-1 p-4 py-6 ml-0 z-10`}>
          <div className="ml-auto">
            <button
              id="breadcrumb"
              aria-label="breadcrumb"
              className="transition-all bg-purple-shade hover:bg-purple-shade/90 font-bold py-3 px-4 rounded-lg"
              onClick={() => {
                if (toggleVal) {
                  toggleVal();
                }
              }}
            >
              {val ? <CrossSVG /> : <NavSVG />}
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap items-center px-3">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                val ? "justify-start gap-4" : ""
              } flex items-baseline transition-all py-4 px-5 w-full rounded-xl bg-transparent hover:bg-gradient-to-bl to-gradient-red/50 from-gradient-blue/50`}
            >
              <div className="h-[22px] w-[22px] flex-none">
                <img
                  className="w-full h-auto"
                  src={link.icon}
                  alt={link.label + i}
                />
              </div>
              <span
                className={`transition-all ${
                  val ? "w-auto opacity-100" : "w-0 opacity-0"
                } line-clamp-1`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
