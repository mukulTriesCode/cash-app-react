import { ReactLenis } from "lenis/react";
import React from "react";
import ValProvider from "./ValProvider";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import background from "../assets/Dashboard-min (1).webp";

const Layout: React.FC = () => {
  return (
    <ReactLenis root>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ValProvider>
            <Sidebar />
            <div className="ms-[88px] relative">
              <div className="absolute z-[-1] top-0 left-0 w-full min-h-screen h-full opacity-10">
                {/* <img
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
                /> */}
              </div>
              <Navbar />
              <div className="pt-[95px]">
                <Outlet />
              </div>
            </div>
          </ValProvider>
        </PersistGate>
      </Provider>
    </ReactLenis>
  );
};

export default Layout;
