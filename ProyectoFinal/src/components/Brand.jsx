import React from "react";
import FilipStore from "../assets/FilipStore.png";

import {Link} from "react-router-dom";
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
            Latienda en tu 💟 Filip Store
            <img src={FilipStore} alt="" style={imageStyle} />
          </h1>
        </Link>
      </div>
    </>
  );
}
