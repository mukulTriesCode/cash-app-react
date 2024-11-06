import { ReactLenis } from "lenis/react";
import React, { useContext, useEffect } from "react";
import ValProvider from "./ValProvider";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import background from "../assets/Dashboard-min (1).webp";
import ValContext from "@/helpers/Context/ValContext";
import { NavSVG } from "@/lib/Svgs";
import { CrossSVG } from "@/lib/Svgs";

const Layout: React.FC = () => {
  const context = useContext(ValContext);
  const { val, toggleVal } = context || {};
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [val]);
  return (
    <ReactLenis root>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ValProvider>
            <div className={`fixed top-0 z-[1000] flex-1 p-4 py-6 ml-0`}>
              <div className="ml-auto">
                <button
                  id="breadcrumb"
                  aria-label="breadcrumb"
                  className=" transition-all bg-purple-shade hover:bg-purple-shade/90 font-bold py-3 px-4 rounded-lg"
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
              {...(val ? { "data-lenis-prevent": "" } : {})}
              className="page-wrapper"
            >
              <Sidebar />
              <div className="ms-[88px] relative">
                <div className="absolute z-[-1] top-0 left-0 w-full min-h-screen h-full opacity-10">
                  <img
                    className="w-full h-full object-cover"
                    src={background}
                    alt="bg"
                    loading="eager"
                    decoding="async"
                    rel="preload"
                  />
                </div>
                <Navbar />
                <div className="pt-[95px]">
                  <Outlet />
                </div>
              </div>
            </div>
          </ValProvider>
        </PersistGate>
      </Provider>
    </ReactLenis>
  );
};

export default Layout;
