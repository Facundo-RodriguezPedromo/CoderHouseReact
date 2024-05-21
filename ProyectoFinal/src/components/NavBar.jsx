import React from "react";
import { useContext } from "react";

import CartWidget from "./CartWidget";
import CategorytList from "./CategorytList";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CartContext from "../contexts/CartContext";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  const calculateQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <AppBar>
        <Toolbar>
          <CategorytList />
          <div className={`${cart.length === 0 ? "hidden" : ""}`}>
            <CartWidget />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
