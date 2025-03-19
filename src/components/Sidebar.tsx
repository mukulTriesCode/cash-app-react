import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ValContext from "../helpers/Context/ValContext";
import { CrossSVG, NavSVG, SearchSVG } from "@/lib/Svgs";
import { GoHomeFill as HomeIcon } from "react-icons/go";
import { BiSolidCategoryAlt as CategoryIcon } from "react-icons/bi";
import { IoMdAddCircle as AddEntryIcon } from "react-icons/io";
import { CgProfile as ProfileIcon } from "react-icons/cg";
import { LuLogIn as Login } from "react-icons/lu";
import useMobile from "@/hooks/useMobile";

const Sidebar: React.FC = () => {
  const context = useContext(ValContext);
  const { val, toggleVal } = context || {};
  const isMobile = useMobile(640);

  const navLinks = [
    { path: "/", label: "Home", icon: <HomeIcon /> },
    { path: "/category", label: "Category", icon: <CategoryIcon /> },
    { path: "/add-entry", label: "Add Entry", icon: <AddEntryIcon /> },
    { path: "/profile", label: "Profile", icon: <ProfileIcon /> },
    { path: "/sign-up", label: "Sign Up", icon: <Login /> },
    { path: "/login", label: "Login", icon: <Login /> },
  ];

  return (
    <div className="flex relative">
      <div
        className={`bg-[#131313] fixed z-[1000] border-r-[0.5px] border-white/10 h-screen transition-all duration-300 ${
          val ? "w-full xs:w-72" : "w-0 xs:w-[88px] xs:overflow-hidden"
        }`}
      >
        <div className={`absolute flex-1 p-4 xs:py-6 ml-0 z-10`}>
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
        <div
          className={`flex flex-col flex-nowrap items-center px-3 mt-24 ${
            val ? "opacity-100" : "opacity-0 xs:opacity-100"
          }`}
        >
          {navLinks?.map((link) => (
            <Link
              key={link?.path}
              to={link?.path}
              className={`${
                val ? "justify-start gap-4" : ""
              } flex items-center transition-all py-4 px-5 w-full rounded-xl bg-transparent hover:bg-gradient-to-bl to-gradient-red/50 from-gradient-blue/50`}
            >
              <div className="text-2xl leading-6 flex-none">{link?.icon}</div>
              <span
                className={`transition-all ${
                  val ? "w-auto opacity-100" : "w-0 opacity-0"
                } line-clamp-1`}
              >
                {link?.label}
              </span>
            </Link>
          ))}
          {isMobile && (
            <div className="w-full max-w-[332px] self-start p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-4 py-3 pr-10 rounded-lg bg-[#a2a3a446] text-white/75 outline-none focus:ring-2 focus:ring-white/50"
                />
                <span className="cursor-pointer">
                  <SearchSVG />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
