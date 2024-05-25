import React from "react";
import FilipStore from "../assets/FilipStore.png";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "35vh", // separacion del nav
  textAlign: "center",
  marginTop: "10px",
};

const imageStyle = {
  width: "110px",
  height: "110px",
  marginTop: "5px", // separacion ente h1 img
  borderRadius: "25px",
};

const buttonStyle = {
  background: "linear-gradient(to right, #051937, #004d7a)",
  color: "#fff",
  padding: "15px",
  borderRadius: "50px",
  textAlign: "center",
  display: "inline-block",
  textDecoration: "none",
};

export default function Brand() {
  return (
    <Box sx={containerStyle}>
      <Link to={"./"} style={{ textDecoration: "none" }}>
        <Box sx={buttonStyle}>
          <Typography variant="h4" component="h1" sx={{ margin: 0 }}>
            OFERTAS
          </Typography>
          <img src={FilipStore} alt="FilipStore Logo" style={imageStyle} />
        </Box>
      </Link>
    </Box>
  );
}
