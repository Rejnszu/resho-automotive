import "@/styles/globals.scss";

import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useRouter } from "next/router";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname.includes("/dashboard")) {
    return (
      <Provider store={store}>
        <AuthGuard>
          <DashboardLayout>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Head>
            <Component {...pageProps} />
          </DashboardLayout>
        </AuthGuard>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <AuthGuard>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AuthGuard>
    </Provider>
  );
}
