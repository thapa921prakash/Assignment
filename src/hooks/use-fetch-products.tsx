import React, { useEffect, useState } from "react";
//hooks
import { getAllProducts } from "../api/product.api";
//types
import { Product } from "../types/types";

const useFetchProducts = (pageIndex: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [total, setTotal] = useState(0);
  const limit = 10; // Number of products per pageIndex

  const fetchProducts = React.useCallback(async () => {
    try {
      setLoading(true);
      const skip = (pageIndex - 1) * limit;
      const data = await getAllProducts(skip, limit);
      setProducts(data.products);
      setTotal(data.total);
    } catch (err: any) {
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, [pageIndex]);

  useEffect(() => {
    fetchProducts();
  }, [pageIndex]);

  return { products, loading, error, total };
};

export default useFetchProducts;
