import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const cN = categoryName
      ? query(productsCollection, where("category", "==", categoryName))
      : productsCollection;

    getDocs(cN)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryName]);

  return { products, isLoading };
}
