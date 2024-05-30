import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../hooks/firebase"; 

export default function useProduct(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const docRef = doc(db, "item", productId);
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productData = { ...snapshot.data(), id: snapshot.id };
          setProduct(productData);
          console.log("Producto obtenido:", productData);  
        } else {
          console.log("No se encontró el documento con el ID:", productId);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el documento:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return { product, loading };
}