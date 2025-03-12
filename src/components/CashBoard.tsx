import React from "react";
// import CashDash from "../assets/CashDash-min (1).webp";
import Profile from "../assets/profile.png";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeartSVG } from "@/lib/Svgs";
import useMobile from "@/hooks/useMobile";

const CashBoard: React.FC = () => {
  const { root, profile } = useSelector((state: RootState) => state);
  const username = profile?.username;
  const email = profile?.email;
  const totalAmount = root?.totalAmount;
  const entries = root?.entries || [];
  const openingBalance = entries.length > 0 ? entries[0].amount : 0;
  const isMobile = useMobile(834);

  return (
    <div className="flex justify-between p-4 w-full h-full bg-gradient-to-bl rounded-xl from-gradient-red to-gradient-blue">
      {!isMobile && (
        <div className="hidden tab:block max-w-[278px] lg:max-w-[350px] xl:max-w-[438px] w-full aspect-[219/200]">
          {/* <img
            className="lg:-translate-x-8 lg:translate-y-6 lg:scale-110"
            src={CashDash}
            alt="Dashboard Image"
            loading="lazy"
            sizes="(max-width: 1200px) 50vw, 33vw"
          /> */}
        </div>
      )}
      <div className="w-full sm:flex-none flex flex-col tab:max-w-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Records</h2>
          <div className="flex items-center">
            <HeartSVG />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src={Profile}
            alt="Profile Image"
          />
          <span className="ml-4 text-lg font-medium">
            <div className="text-sm">{username || "Mukul Sharma"}</div>
            <div className="text-xs font-light">{email || "@mukulsharma"}</div>
          </span>
        </div>
        <div className="flex justify-between mt-7">
          <div className="w-1/2">
            <div className="text-xs font-light">Opening Balance</div>
            <div className="text-xl font-bold">
              Rs. {openingBalance || "--"}
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-xs font-light">Current Balance</div>
            <div className="text-xl font-bold">Rs. {totalAmount || "--"}</div>
          </div>
        </div>
        <div className="flex mt-7 md:mt-auto gap-4 font-semibold text-center">
          <Link
            to={"/add-entry"}
            className="w-full transition-all bg-white/70 text-black hover:bg-white py-2 px-4 rounded"
          >
            Add Entry
          </Link>
          <button className="w-full transition-all bg-transparent border border-white text-white hover:border-white/10 hover:bg-white hover:text-black to-gradient-red/40 from-gradient-blue/40 py-2 px-4 rounded">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashBoard;
