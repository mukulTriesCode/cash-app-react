import React, { useState } from "react";
import NotificationModal from "./NotificationModal";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-9">
            <div
              className="relative"
              onClick={() => {
                document.body.style.overflow = "hidden";
                setIsNotificationOpen(!isNotificationOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white/75 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
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
