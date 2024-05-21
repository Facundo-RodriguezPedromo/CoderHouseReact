import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/category/mens-clothing",
    label: "Mens clothing",
  },
  {
    path: "/category/jewelery",
    label: "Jewelery",
  },
  {
    path: "/category/electronics",
    label: "Electronics",
  },
  {
    path: "/category/womens-clothing",
    label: "Womens clothing",
  },
];

export default function CategoryList() {
  return (
    <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
      {MIS_RUTAS.map((ruta) => (
        <NavLink
          key={ruta.path}  // Aquí se coloca la key
          style={{
            textDecoration: "none",
            padding: "0 16px",
          }}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to={ruta.path}
        >
          <IconButton color="inherit">
            <ListItem style={{ width: "auto", padding: 0 }}>
              <Typography variant="body1" style={{ padding: "0 16px" }}>
                {ruta.label}
              </Typography>
            </ListItem>
          </IconButton>
        </NavLink>
      ))}
    </List>
  );
}