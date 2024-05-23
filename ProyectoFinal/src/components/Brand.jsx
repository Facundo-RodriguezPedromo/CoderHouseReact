import React from "react";
import FilipStore from "../assets/FilipStore.png";

import { Link } from "react-router-dom";

const imageStyle = {
  width: "110px",
  height: "110px",
  marginRight: "10px",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
};

export default function Brand() {
  return (
    <>
      <div style={containerStyle}>
        <Link to={"./"}>
          <h1
            style={{
              paddingTop: 50,
              margin: "auto",
            }}
          >
            Tienda Filip Store
          </h1>
          <img src={FilipStore} alt="" style={imageStyle} />
        </Link>
      </div>
    </>
  );
}
