import "./styles/globals.scss";

import SEOConfig from "./next-seo.config";
import { DefaultSeo } from "next-seo";

export const metadata = {
  title: "Pedro Kielma Portfolio",
  description: "created by PedroKielma",
  imageDescription: "Description of your image",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}

