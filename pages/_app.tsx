// Styles
import "../styles/globals.css";
import localFont from "@next/font/local";
const myFont = localFont({ src: "../fonts/Pixelar-Regular-W01-Regular.ttf" });

import Script from "next/script";

// Props
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <div className={myFont.className}>
      <Script src="https://kit.fontawesome.com/b03f01c4af.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
