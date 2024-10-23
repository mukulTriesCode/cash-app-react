import { ReactLenis } from "lenis/react";
import React from "react";
import ValProvider from "./ValProvider";
import { Provider } from "react-redux";
import { store } from "../store";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactLenis root>
      <Provider store={store}>
        <ValProvider>{children}</ValProvider>
      </Provider>
    </ReactLenis>
  );
};

export default Layout;
