import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function useProduct(id) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const product = doc(db, "products", id);

    getDoc(product)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("No podemos encontrar el producto");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { product, isLoading };
}