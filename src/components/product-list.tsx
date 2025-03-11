import React from "react";
//chakra
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
//hooks
import useFetchProducts from "../hooks/use-fetch-products";
//components
import { ProductCard } from "./product-card";
//error boundary
import ErrorBoundary from "./error-boundary";
//react-if
import { When } from "react-if";
//loadash
import { isEmpty } from "lodash";
//types
import { Product } from "../types/types";

const ProductList: React.FC = () => {
  const { products, loading, error } = useFetchProducts();

  return (
    <ErrorBoundary>
      <Box>
        <Text fontSize={"16px"} fontWeight="bold" textAlign={"center"} mb={6}>
          Product List
        </Text>
        <When condition={error && !loading}>
          <Center h="100vh">
            <Text fontSize="xl" color="red.500">
              Error: {error}
            </Text>
          </Center>
        </When>

        <When condition={loading && !error}>
          <Center h="100vh">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </When>

        <When condition={!loading && !isEmpty(products)}>
          <Flex flexWrap={"wrap"} gap={10}>
            {products?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex>
        </When>
      </Box>
    </ErrorBoundary>
  );
};

export default ProductList;
