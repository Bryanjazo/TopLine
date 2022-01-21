import Head from "next/head";
import Image from "next/image";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons

import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import HomeComponent from "../components/HomeComponent";
export default function Home() {
  return (
    <div>
      <HomeComponent />
    </div>
  );
}
