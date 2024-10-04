import { ReactLenis } from "lenis/react";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Layout;
