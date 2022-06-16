import PrimaryHeader from "../components/PrimaryHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PrimaryHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
