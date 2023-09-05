import "@fortawesome/fontawesome-svg-core/styles.css";
import "./AppLayout.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import { type ReactNode } from "react";
import Header from "./Header";
import Providers from "./Providers";

config.autoAddCss = false;

type AppLayoutProps = {
  children: ReactNode,
};

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
