"use client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "~/redux/store";
import type { ReactNode } from "react";

/**
 * Props for the Providers component.
 *
 * @property {ReactNode} children - The child elements to be wrapped by the Providers component.
 */

type ProvidersProps = {
  children: ReactNode,
};

/**
 * The Providers component for wrapping child components with Redux and persistence providers.
 *
 * @param {ProvidersProps} props - The props for the Providers component.
 * @returns {JSX.Element} The JSX element representing the Providers component.
 */

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
