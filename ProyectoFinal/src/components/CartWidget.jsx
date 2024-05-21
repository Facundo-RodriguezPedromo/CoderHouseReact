import React from "react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const calculateQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link to={"/cart"}>
      <div>
        <CartIcon ancho={40} alto={40} />
        <span>{calculateQuantity}</span>
      </div>
    </Link>
  );
}

export default CartWidget;