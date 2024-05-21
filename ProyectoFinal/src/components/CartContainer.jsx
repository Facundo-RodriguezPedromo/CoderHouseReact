import CartContext from "../contexts/CartContext";
import CartItem from "./CartItem";

import { useContext } from "react";

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div>
      <h2>Mi Carrito</h2>
      <div>
        {cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        )}
      </div>
      <h3>Total: ${cartTotal}</h3>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
}
