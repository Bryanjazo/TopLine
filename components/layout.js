import NavBar from "./NavBar";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
