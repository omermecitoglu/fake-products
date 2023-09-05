import "@fortawesome/fontawesome-svg-core/styles.css";
import "./AppLayout.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import { type ReactNode } from "react";
import Header from "./Header";
import Providers from "./Providers";

/**
 * Configure Font Awesome to disable automatic CSS injection.
 */

config.autoAddCss = false;

/**
 * Props for the AppLayout component.
 *
 * @property {ReactNode} children - The child elements to be rendered inside the AppLayout.
 */

type AppLayoutProps = {
  children: ReactNode,
};

/**
 * The AppLayout component representing the layout structure of the application.
 *
 * @param {AppLayoutProps} props - The props for the AppLayout component.
 * @returns {JSX.Element} The JSX element representing the AppLayout component.
 */

const AppLayout = ({
  children,
}: AppLayoutProps) => (
  <div>
    <Providers>
      <Header />
      <div className="container mt-4">
        {children}
      </div>
    </Providers>
  </div>
);

export default AppLayout;
