import NavBar from "./NavBar";
import Head from "next/head";
import Footer from "./Footer/Footer";
import FooterStrip from "./Footer/FooterStrip";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      <FooterStrip />
    </>
  );
}
