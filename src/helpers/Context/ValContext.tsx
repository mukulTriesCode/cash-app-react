import { createContext } from "react";

const ValContext = createContext<
  { val: boolean; toggleVal: () => void } | undefined
>(undefined);

export default ValContext;
