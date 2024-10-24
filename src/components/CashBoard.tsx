import React from "react";
import CashDash from "../assets/CashDash-min (1).webp";
import Profile from "../assets/profile.png";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const CashBoard: React.FC = () => {
  const count = useSelector((state: RootState) => state?.root?.value);
  return (
    <div className="col-span-2 flex justify-between p-4 w-full h-full bg-gradient-to-bl rounded-xl from-gradient-red to-gradient-blue">
      <div className="max-w-[438px]">
        <img
          className="-translate-x-8 translate-y-6 scale-110"
          src={CashDash}
          alt="Dashboard Image"
        />
      </div>
      <div className="w-full flex flex-col max-w-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Records</h2>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
              className="w-6 h-6 text-[#FF5858]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src={Profile}
            alt="Profile Image"
            fetchPriority="high"
            rel="preload"
          />
          <span className="ml-4 text-lg font-medium">
            <div className="text-sm">Mukul Sharma</div>
            <div className="text-xs font-light">@mukulsharma</div>
          </span>
        </div>
        <div className="flex justify-between mt-7">
          <div className="w-1/2">
            <div className="text-xs font-light">Opening Balance</div>
            <div className="text-xl font-bold">Rs. 8143</div>
          </div>
          <div className="w-1/2">
            <div className="text-xs font-light">Current Balance</div>
            <div className="text-xl font-bold">Rs. {count}</div>
          </div>
        </div>
        <div className="flex mt-auto gap-4 font-semibold">
          <button className="w-full transition-all bg-white/70 text-black hover:bg-white py-2 px-4 rounded">
            View Rewards
          </button>
          <button className="w-full transition-all bg-transparent border border-white text-white hover:text-white/70 hover:border-white/10 hover:bg-gradient-to-bl to-gradient-red/40 from-gradient-blue/40 py-2 px-4 rounded">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashBoard;
