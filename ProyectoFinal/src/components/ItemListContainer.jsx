import useProducts from "../hooks/useProducts";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";

export default function ItemListContainer({ saludo }) {
  const { categoryName } = useParams();
  const { isLoading, products } = useProducts(categoryName);

  if (isLoading) return <h1>Cargando Productos . . .</h1>;

  return (
    <>
      <h2>{saludo}</h2>

      <ItemList products={products} />
    </>
  );
}
