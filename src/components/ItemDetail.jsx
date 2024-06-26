import React, { useContext } from "react";
import useCount from "../hooks/useCount";
import ItemCount from "./ItemCount";
import CartContext from "../contexts/CartContext";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";

export default function ItemDetail({ item }) {
  const { count, increment, decrement, reset } = useCount(0);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item, count);
    reset();
  };

  if (!item) {
    return <p>Producto no disponible</p>;
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 200, m: 1 }}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{ height: "auto" }}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${item.price}
          </Typography>
        </CardContent>
        <CardContent>
          <ItemCount
            stock={item.stock}
            count={count}
            increment={increment}
            decrement={decrement}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            disabled={count === 0}
            fullWidth
          >
            Añadir al carrito
          </Button>
        </CardActions>
        <Typography variant="h6" color="text.primary">
          Quedan {item.stock - count} unidades disponibles
        </Typography>
      </Card>
    </Grid>
  );
}
