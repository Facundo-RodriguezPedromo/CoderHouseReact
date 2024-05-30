import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  console.log("Product ID:", productId);
  const { product } = useProduct(productId);

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail item={product} />
    </>
  );
}
