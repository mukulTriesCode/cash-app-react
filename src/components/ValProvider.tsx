import React, { useEffect, useState } from "react";
import ValContext from "../helpers/Context/ValContext";

const ValProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [val, setVal] = useState(false);
  const toggleVal = () => {
    setVal(!val);
  };
  useEffect(() => {
    const pageWrapper = document.querySelector(".page-wrapper");
    // const disableScroll = () => {
    //   const scrollTop =
    //     window.pageYOffset || document.documentElement.scrollTop;
    //   const scrollLeft =
    //     window.pageXOffset || document.documentElement.scrollLeft;
    //   window.onscroll = () => {
    //     window.scrollTo(scrollLeft, scrollTop);
    //   };
    // };
    function enableScroll() {
      window.onscroll = function () {};
    }
    if (pageWrapper) {
      if (val) {
        (pageWrapper as HTMLElement).style.overflow = "hidden";
        (pageWrapper as HTMLElement).style.height = "100%";
        // disableScroll();
      } else {
        (pageWrapper as HTMLElement).style.overflow = "";
        enableScroll();
          }
    }
  }, [val]);
  return (
    <ValContext.Provider value={{ val, toggleVal }}>
      {children}
    </ValContext.Provider>
  );
};

export default ValProvider;
