import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Box, Button, Typography, Container } from "@mui/material";

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        Mis articulos:
      </Typography>
      <Box>
        {cart.length === 0 ? (
          <Typography variant="h5" component="h1" color="textSecondary">
            Carrito vacio
          </Typography>
        ) : (
          cart.map((item) => <CartItem key={item.product.id} item={item} />)
        )}
      </Box>
      <Typography variant="h4" component="h3" gutterBottom>
        Total: ${cartTotal}
      </Typography>
      <Button variant="contained" color="primary" onClick={clearCart}>
        Vaciar carrito
      </Button>
    </Container>
  );
}
