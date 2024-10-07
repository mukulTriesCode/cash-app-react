import React, { useState } from "react";
import ValContext from "../helpers/Context/ValContext";

const ValProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [val, setVal] = useState(false);
  const toggleVal = () => {
    setVal(!val);
  };
  return (
    <ValContext.Provider value={{val, toggleVal}}>
      {children}
    </ValContext.Provider>
  );
};

export default ValProvider;
