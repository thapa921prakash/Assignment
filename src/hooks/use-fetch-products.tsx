import React, { useEffect, useState } from "react";
//hooks
import { getAllProducts } from "../api/product.api";
//types
import { Product } from "../types/types";

const useFetchProducts = () => {
  //local states
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = React.useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data.products);
    } catch (err: any) {
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts?.();
  }, [fetchProducts]);

  return { products, loading, error };
};

export default useFetchProducts;
