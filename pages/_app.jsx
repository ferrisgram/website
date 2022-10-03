import Meta from "../assets/Meta";
import Navbar from "../assets/Navbar";
import Footer from "../assets/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
