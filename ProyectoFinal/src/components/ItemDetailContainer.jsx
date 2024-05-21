import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useProductById from "../hooks/useProductById";

export default function ItemDetailContainer() {
  const params = useParams();

  const { productId } = params;
  const { loading, product } = useProductById(productId);

  if (loading) {
    return <h1>Cargando . . .</h1>;
  }

  return (
    <>
      <ItemDetail item={product} />
    </>
  );
}
