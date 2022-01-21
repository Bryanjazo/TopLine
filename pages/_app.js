import "../styles/globals.scss";
import Head from "next/head";

// ...

import Layout from "../components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
