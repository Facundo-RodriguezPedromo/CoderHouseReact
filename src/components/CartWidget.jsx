import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import { Badge, IconButton } from "@mui/material";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const calculateQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
      <IconButton aria-label="cart">
        <Badge badgeContent={calculateQuantity} color="primary">
          <CartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
}

export default CartWidget;
