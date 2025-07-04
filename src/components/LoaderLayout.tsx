import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import background from "../assets/Dashboard-min.webp";
import { routes } from "../routes";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LoadingSpinner from "./LoadingSpinner";

const LoaderLayout: React.FC = () => {
  const location = useLocation();
  const isProtectedRoute = routes.find(
    (route) => route.path === location.pathname
  )?.protected;

  const loading = useSelector((state: RootState) => state.loader.loading);

  return (
    <>
      {isProtectedRoute && <Sidebar />}

      <div
        className={
          isProtectedRoute
            ? "xs:ms-[88px] relative"
            : "relative grid grid-cols-5"
        }
      >
        {/* Background Image */}
        <div className="absolute z-[-1] top-0 left-0 w-full min-h-screen h-full opacity-10">
          <img
            className="w-full h-full object-cover"
            src={background}
            alt="bg"
            loading="eager"
            decoding="async"
            rel="preload"
            sizes="(max-width: 1200px) 50vw, 33vw"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        </div>

        {/* Navbar or Placeholder */}
        {isProtectedRoute ? (
          <Navbar />
        ) : (
          <div className="hidden sm:block col-span-3 bg-blue-600"></div>
        )}

        {/* Page Content */}
        <div
          className={`${
            isProtectedRoute
              ? "pt-[81px] xs:pt-[95px]"
              : "col-span-5 sm:col-span-2"
          }`}
        >
          {isProtectedRoute ? (
            <Outlet />
          ) : (
            <div className="h-screen w-full flex justify-center items-center px-8">
              <Outlet />
            </div>
          )}
        </div>

        {/* Global Loader Overlay */}
        {loading && <LoadingSpinner />}
      </div>
    </>
  );
};

export default LoaderLayout;
