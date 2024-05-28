import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const { loading, product } = useProduct(productId);

  if (loading) {
    return <h1>Cargando detalle del producto. . .</h1>;
  }

  return (
    <>
      <h1>Detalle del producto</h1>

      <ItemDetail item={product} />
    </>
  );
}
