import React from "react";

import CartWidget from "./CartWidget";
import CategorytList from "./CategorytList";
import Brand from "./Brand";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function NavBar() {

  return (
    <>
      <AppBar>
        <Toolbar>
          <CategorytList />
          <CartWidget />
          <Brand />
        </Toolbar>
      </AppBar>
    </>
  );
}
