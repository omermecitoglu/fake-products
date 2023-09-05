import { type ReactNode } from "react";
import AppLayout from "~/components/AppLayout";

/**
 * Props for the RootLayout component.
 *
 * @property {ReactNode} children - The child elements to be rendered inside the RootLayout.
 */

type RootLayoutProps = {
  children: ReactNode,
};

/**
 * The root layout component for the application.
 *
 * @param {RootLayoutProps} props - The props for the RootLayout component.
 * @returns {JSX.Element} The rendered HTML structure.
 */

const RootLayout = ({
  children,
}: RootLayoutProps) => (
  <html lang="en">
    <body>
      <AppLayout>
        {children}
      </AppLayout>
    </body>
  </html>
);

export default RootLayout;
