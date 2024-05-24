import React from "react";
import { Box } from "@mui/material";
import Navbar from "./NavBar";
import Brand from "./Brand";
import Footer from "./Footer";

const FOOTER_HEIGHT = 200; // Altura fija del footer

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Brand />
        <Navbar />
      </header>
      <Box component="main" sx={{ marginBottom: `${FOOTER_HEIGHT}px` }}>
        {children}
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
