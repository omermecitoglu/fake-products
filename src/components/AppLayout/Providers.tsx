"use client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "~/redux/store";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode,
};

const Providers = ({
  children,
}: ProvidersProps) => (
  <ReduxProvider store={store}>
    {children}
  </ReduxProvider>
);

export default Providers;
