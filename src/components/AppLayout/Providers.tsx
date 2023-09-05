"use client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "~/redux/store";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode,
};

const Providers = ({
  children,
}: ProvidersProps) => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </ReduxProvider>
);

export default Providers;
