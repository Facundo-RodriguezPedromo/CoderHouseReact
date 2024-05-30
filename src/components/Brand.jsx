import React from "react";
import FilipStore from "../assets/FilipStore.png";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: "10px",
};

const imageStyle = {
  width: "50px",
  height: "50px",
  marginTop: "2px",
  borderRadius: "15px",
};

const buttonStyle = {
  background: "linear-gradient(to right, #051937, #004d7a)",
  color: "#fff",
  padding: "10px",
  borderRadius: "50px",
  textAlign: "center",
  textDecoration: "none",
};

export default function Brand() {
  return (
    <Box sx={containerStyle}>
      <Link to={"./"}>
        <Button sx={buttonStyle}>
          <img src={FilipStore} alt="FilipStore Logo" style={imageStyle} />
          <Typography>OFFERS</Typography>
        </Button>
      </Link>
    </Box>
  );
}
