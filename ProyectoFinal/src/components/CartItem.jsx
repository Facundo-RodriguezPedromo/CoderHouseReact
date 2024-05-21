import React from "react";

import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div key={item}>
      <div>
        <div>
          <img src={item.product.image} alt={item.product.title} />
        </div>
        <div>
          <p>{item.product.title}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.product.price}</p>
        </div>
      </div>
      <div>
        <button onClick={() => removeFromCart(item.product.id, 1)}>-</button>
        <button onClick={() => addToCart(item.product, 1)}>+</button>
      </div>
    </div>
  );
}
