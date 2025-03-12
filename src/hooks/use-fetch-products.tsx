import React, { useEffect, useState } from "react";
//hooks
import { getAllProducts } from "../api/product.api";
//types
import { Product } from "../types/types";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [total, setTotal] = useState(0);
  const limit = -1; // to get all data

  const fetchProducts = React.useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllProducts(limit);
      setProducts(data.products);
      setTotal(data.total);
    } catch (err: any) {
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, total };
};

export default useFetchProducts;
