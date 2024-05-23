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
  const [count, setCount] = useState(1);

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
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card sx={{ maxWidth: 220, m: 1 }}>
      <Link to={`/product/${item.id}`}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{ height: "auto" }}
          />
        </Link>

        <CardContent>
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
            <Typography gutterBottom variant="h6" component="h2">
              {item.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${item.price}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ItemCount
            stock={item.stock}
            count={count}
            increment={increment}
            decrement={decrement}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAdd(item, count)}
            fullWidth
            sx={{ mt: 1 }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
