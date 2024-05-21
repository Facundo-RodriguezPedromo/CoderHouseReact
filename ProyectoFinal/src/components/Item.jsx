import React, { useState } from "react";
import ItemCount from "./ItemCount";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({ item, onAdd }) {
  const [count, setCount] = useState(1); // Inicializa el estado count

  const increment = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 200, m: 1 }}>
        <Link to={`/product/${item.id}`}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{ height: "auto" }}
          />
        </Link>

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

        <CardActions>
          <ItemCount
            stock={item.stock}
            count={count}
            increment={increment}
            decrement={decrement}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAdd(item.title, count)}
            fullWidth
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
