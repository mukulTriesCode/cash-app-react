import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ValContext from "../helpers/Context/ValContext";
import { CrossSVG, NavSVG } from "@/lib/Svgs";
import { GoHomeFill as HomeIcon } from "react-icons/go";
import { BiSolidCategoryAlt as CategoryIcon } from "react-icons/bi";
import { IoMdAddCircle as AddEntryIcon } from "react-icons/io";
import { CgProfile as ProfileIcon } from "react-icons/cg";
import { LuLogIn as Login } from "react-icons/lu";

const Sidebar: React.FC = () => {
  const context = useContext(ValContext);
  const { val, toggleVal } = context || {};

  const navLinks = [
    { path: "/", label: "Home", icon: <HomeIcon /> },
    { path: "/category", label: "Category", icon: <CategoryIcon /> },
    { path: "/add-entry", label: "Add Entry", icon: <AddEntryIcon /> },
    { path: "/profile", label: "Profile", icon: <ProfileIcon /> },
    { path: "/sign-up", label: "Sign Up", icon: <Login /> },
    { path: "/login", label: "Login", icon: <Login /> },
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
          {navLinks?.map((link) => (
            <Link
              key={link?.path}
              to={link?.path}
              className={`${
                val ? "justify-start gap-4" : ""
              } flex items-center transition-all py-4 px-5 w-full rounded-xl bg-transparent hover:bg-gradient-to-bl to-gradient-red/50 from-gradient-blue/50`}
            >
              <div className="text-2xl leading-6 flex-none">
                {link?.icon}
              </div>
              <span
                className={`transition-all ${
                  val ? "w-auto opacity-100" : "w-0 opacity-0"
                } line-clamp-1`}
              >
                {link?.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
