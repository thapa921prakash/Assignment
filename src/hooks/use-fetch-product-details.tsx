import React, { useEffect, useState } from "react";
//hooks
import { getProductById } from "../api/product.api";
//types
import { Product } from "../types/types";

const useFetchProductDetails = (id: number | string) => {
  //local states
  const [details, setDetails] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDetails = React.useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProductById(id);
      setDetails(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch details");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails?.();
  }, [fetchDetails]);

  return { details, loading, error };
};

export default useFetchProductDetails;
