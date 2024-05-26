import React from "react";
import { Box } from "@mui/material";

import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Box sx={{ marginBottom: 20, marginTop: 20 }}>{children}</Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
