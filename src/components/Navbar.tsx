import React, { useState } from "react";
import NotificationModal from "./NotificationModal";
import { BellSVG, ProfileSVG, SearchSVG } from "@/lib/Svgs";

const Navbar: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 w-[calc(100%-88px)] px-7 border-b border-[#262626] py-6 bg-[#131313]">
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[300px] relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-4 py-3 pr-10 rounded-lg bg-[#a2a3a446] text-white/75 outline-none focus:ring-2 focus:ring-white/50"
            />
            <span className="cursor-pointer">
              <SearchSVG />
            </span>
          </div>
          <div className="flex items-center gap-9">
            <div
              className="relative"
              onClick={() => {
                document.body.style.overflow = "hidden";
                setIsNotificationOpen(!isNotificationOpen);
              }}
            >
              <BellSVG />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
              <ProfileSVG />
            </div>
          </div>
        </div>
      </div>
      {isNotificationOpen && (
        <NotificationModal notification={setIsNotificationOpen} />
      )}
    </>
  );
};

export default Navbar;
