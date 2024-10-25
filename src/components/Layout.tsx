import { ReactLenis } from "lenis/react";
import React from "react";
import ValProvider from "./ValProvider";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactLenis root>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ValProvider>{children}</ValProvider>
        </PersistGate>
      </Provider>
    </ReactLenis>
  );
};

export default Layout;
