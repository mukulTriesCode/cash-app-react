import { ReactLenis } from "lenis/react";
import React from "react";
import ValProvider from "./ValProvider";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactLenis root>
      <ValProvider>{children}</ValProvider>
    </ReactLenis>
  );
};

export default Layout;
