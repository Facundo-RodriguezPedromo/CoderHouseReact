import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import IconButton from "@mui/material/IconButton";

export default function CartIcon() {
  return (
    <>
      <IconButton edge="end" color="inherit" aria-label="shopping cart">
        <FaShoppingCart size={30} color="blue" />
      </IconButton>
    </>
  );
}
