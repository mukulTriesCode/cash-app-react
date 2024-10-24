import React, { useContext } from "react";
import homeLogo from "../assets/home.png";
import { Link } from "react-router-dom";
import ValContext from "../helpers/Context/ValContext";

const Sidebar: React.FC = () => {
  const context = useContext(ValContext);
  const { val, toggleVal } = context || {};
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
              className="transition-all bg-purple-shade hover:bg-purple-shade/90 font-bold py-3 px-4 rounded-lg"
              onClick={() => {
                if (toggleVal) {
                  toggleVal();
                }
              }}
            >
              {val ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap items-center px-3">
          <Link
            to="/"
            className={`${
              val ? "justify-start gap-4" : ""
            } flex transition-all py-4 px-5 w-full rounded-xl bg-transparent hover:bg-gradient-to-bl to-gradient-red/50 from-gradient-blue/50`}
          >
            <div className="h-[22px] w-[22px]">
              <img className="w-full h-auto" src={homeLogo} alt="home" />
            </div>
            <span
              className={`transition-all ${
                val ? "w-auto opacity-100" : "w-0 opacity-0"
              }`}
            >
              Home
            </span>
          </Link>
          <Link
            to="/path"
            className={`${
              val ? "justify-start gap-4" : ""
            } flex transition-all py-4 px-5 w-full rounded-xl bg-transparent hover:bg-gradient-to-bl to-gradient-red/50 from-gradient-blue/50`}
          >
            <div className="h-[22px] w-[22px]">
              <img className="w-full h-auto" src={homeLogo} alt="home" />
            </div>
            <span
              className={`transition-all ${
                val ? "w-auto opacity-100" : "w-0 opacity-0"
              }`}
            >
              Path
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
