import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.product.image}
        alt={item.product.title}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="h5" variant="h5">
          {item.product.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Cantidad: {item.quantity}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Precio: ${item.product.price}
        </Typography>
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(item.product, 1)}
            >
              +
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromCart(item.product.id, 1)}
            >
              -
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}