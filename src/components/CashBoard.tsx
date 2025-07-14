import React from "react";
import CashDash from "../assets/CashDash-min.webp";
import Profile from "../assets/profile.webp";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeartSVG } from "@/lib/Svgs";
import useMobile from "@/hooks/useMobile";
import { Entry } from "@/features/cashCountSlice";
import { useGetEntriesQuery } from "@/services/entryService";
import { useGetUserQuery } from "@/services/profileService";

const CashBoard: React.FC = () => {
  const { data: entryData } = useGetEntriesQuery("");
  const { data: userData } = useGetUserQuery("");
  const getOpeningBalance = (entries: Entry[]) => {
    if (entries.length === 0) {
      return null;
    }
    return [...entries].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0]?.amount;
  };
  const username = userData?.user?.username || "";
  const openingBalance = getOpeningBalance(entryData?.data || []);
  const email = userData?.user?.email || "";
  const totalAmount = entryData?.totalAmount;
  const isMobile = useMobile(834);

  return (
    <div className="flex justify-between p-4 w-full h-full bg-gradient-to-bl rounded-xl from-gradient-red to-gradient-blue">
      {!isMobile && (
        <div className="max-w-[278px] lg:max-w-[350px] 2xl:max-w-[380px] w-full aspect-[219/200]">
          <img
            className="lg:-translate-x-8 lg:translate-y-6 lg:scale-110"
            src={CashDash}
            alt="Dashboard Image"
            loading="lazy"
            sizes="(max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="w-full flex-none xl:flex-auto flex flex-col tab:max-w-[450px]">
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
            width="56"
            height="56"
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
        <div className="flex flex-col xs:flex-row mt-7 md:mt-auto gap-4 font-semibold text-center">
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
