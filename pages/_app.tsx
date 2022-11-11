import "../styles/normalize.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import localFont from "@next/font/local";
const myFont = localFont({ src: "../fonts/Pixelar-Regular-W01-Regular.ttf" });

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
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </div>
  );
}
