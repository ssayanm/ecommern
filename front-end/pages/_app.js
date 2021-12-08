import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
   page_path: window.location.pathname,
 });
     `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
