import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/category/mens clothing",
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
    path: "/category/womens clothing",
    label: "Womens clothing",
  },
];

export default function CategoryList() {
  return (
    <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
      {MIS_RUTAS.map((ruta) => (
        <ListItem key={ruta.path} style={{ width: "auto", padding: 0 }}>
          <IconButton color="inherit">
            <Typography variant="body1" style={{ padding: "0 16px" }}>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to={ruta.path}
              >
                {ruta.label}
              </NavLink>
            </Typography>
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
