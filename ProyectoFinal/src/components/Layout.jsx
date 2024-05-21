import React from "react";
import Navbar from "./NavBar";
import Brand from "./Brand";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Brand />
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
