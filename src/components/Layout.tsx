import { ReactLenis } from "lenis/react";
import React from "react";
import ValProvider from "./ValProvider";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import background from "../assets/Dashboard-min.webp";
import useMobile from "@/hooks/useMobile";
import { routes } from "../routes";

const Layout: React.FC = () => {
  const isMobile = useMobile(640);
  const location = useLocation();

  const isProtectedRoute = routes.find(
    (route) => route.path === location.pathname
  )?.protected;

  return (
    <ReactLenis root>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ValProvider>
            {isProtectedRoute && <Sidebar />}
            <div
              className={
                isProtectedRoute
                  ? "xs:ms-[88px] relative"
                  : "relative grid grid-cols-5"
              }
            >
              {!isMobile && (
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
              )}
              {isProtectedRoute ? (
                <Navbar />
              ) : (
                <div className="col-span-3 bg-blue-600"></div>
              )}
              <div
                className={`${
                  isProtectedRoute ? "pt-[81px] xs:pt-[95px]" : "col-span-2"
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
            </div>
          </ValProvider>
        </PersistGate>
      </Provider>
    </ReactLenis>
  );
};

export default Layout;
