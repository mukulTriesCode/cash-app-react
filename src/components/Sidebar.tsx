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
  ];

  return (
    <div className="flex">
      <div className={`fixed z-[1000] flex-1 p-4 py-6 ml-0`}>
        <div className="ml-auto">
          <button
            id="breadcrumb"
            aria-label="breadcrumb"
            className=" transition-all bg-purple-shade hover:bg-purple-shade/90 font-bold py-3 px-4 rounded-lg"
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
      <div
        data-lenis-prevent
        className={`bg-[#131313] fixed z-[999] border-r-[0.5px]  border-white/10 h-screen transition-all duration-300 ${
          val
            ? "w-screen overflow-y-scroll "
            : "w-[88px] overflow-hidden -translate-x-full"
        }`}
      >
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
