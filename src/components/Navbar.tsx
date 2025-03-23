import React, { useState } from "react";
import NotificationModal from "./NotificationModal";
import { ArrowUpIcon, BellSVG, ProfileSVG, SearchSVG } from "@/lib/Svgs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { profileSlice } from "@/features/profileSlice";
import useMobile from "@/hooks/useMobile";
import Profile from "../assets/profile.webp";

const Navbar: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const isMobile = useMobile(640);

  const dispatch = useDispatch();
  const action = profileSlice.actions.logoutProfile;
  const logOut = () => {
    dispatch(action());
  };

  const handleProfileDropdown = () => {
    setIsProfileClicked(!isProfileClicked);
  };

  return (
    <>
      <div className="fixed z-50 ps-[88px] pe-4 w-full xs:w-[calc(100%-88px)] xs:px-7 border-b border-[#262626] py-4 xs:py-6 bg-[#131313]">
        <div className="flex items-center justify-end h-12 xs:h-auto xs:justify-between gap-5 xs:gap-0">
          {!isMobile && (
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
          )}
          <div className="flex items-center gap-5 xs:gap-9">
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
            <div
              onClick={() => handleProfileDropdown()}
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer relative"
            >
              {Profile ? (
                <img
                  className="rounded-full object-cover"
                  src={Profile}
                  alt="Profile Image"
                  width="40"
                  height="40"
                />
              ) : (
                <ProfileSVG />
              )}
              <div
                className={`absolute top-full right-0 ${
                  isProfileClicked ? "block" : "hidden"
                }`}
              >
                <ArrowUpIcon />
                <div className="absolute w-[250px] right-0 translate-x-1 top-[calc(100%+15px)] rounded-xl bg-primary overflow-hidden border-2 border-white/50 flex flex-col">
                  <ul>
                    <Link to={"/profile"}>
                      <li className="px-4 hover:bg-slate-800 py-2 border-b border-b-white/50">
                        Visit Profile
                      </li>
                    </Link>
                    <div onClick={() => logOut()}>
                      <li className="px-4 hover:bg-slate-800 py-2">Logout</li>
                    </div>
                  </ul>
                </div>
              </div>
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
