import React from "react";
import { useParams } from "react-router-dom";
import useProductById from "../hooks/useProductById";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const { loading, product } = useProductById(productId);

  if (loading) {
    return <h1>Cargando . . .</h1>;
  }

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail item={product} />
    </>
  );
}
