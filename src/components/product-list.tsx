import React, { useState } from "react";
//chakra
import { Box, Button, Center, Flex, Spinner, Text } from "@chakra-ui/react";
//lodash
import { isEmpty } from "lodash";
//react-if
import { When } from "react-if";
//hooks
import useFetchProducts from "../hooks/use-fetch-products";
//ErrorBoundary
import ErrorBoundary from "./error-boundary";
//components
import { ProductCard } from "./product-card";
//chakra icons
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const ProductList: React.FC = () => {
  //local states
  const [pageIndex, setPageIndex] = useState(1);

  // Fetch products with search and pagination
  const { products, loading, error, total } = useFetchProducts(pageIndex);

  // Constants for pagination
  const limit = 10; // Number of products per pageIndex
  const totalpPageIndex = Math.ceil(total / limit);

  // Handle pagination
  const handleNextPageIndex = () => setPageIndex((prev: any) => prev + 1);
  const handlePrevPageIndex = () =>
    setPageIndex((prev: any) => Math.max(prev - 1, 1));

  return (
    <ErrorBoundary>
      <Box>
        <Text fontSize={"16px"} fontWeight="bold" textAlign={"center"} mb={6}>
          Product List
        </Text>

        {/* Error State */}
        <When condition={error && !loading}>
          <Center h="100vh">
            <Text fontSize="xl" color="red.500">
              Error: {error}
            </Text>
          </Center>
        </When>

        {/* Loading State */}
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

        {/* Product List */}
        <When condition={!loading && !isEmpty(products)}>
          <Flex flexWrap={"wrap"} gap={4}>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex>
          {/* Pagination Controls */}
          <Flex justifyContent="center" mt={6} gap={4}>
            <Button onClick={handlePrevPageIndex} disabled={pageIndex === 1}>
              <ArrowLeftIcon fontSize={"16px"} />
            </Button>
            <Text>
              {pageIndex} of {totalpPageIndex}
            </Text>
            <Button
              onClick={handleNextPageIndex}
              disabled={pageIndex === totalpPageIndex}
            >
              <ArrowRightIcon fontSize={"16px"} />
            </Button>
          </Flex>
        </When>
      </Box>
    </ErrorBoundary>
  );
};

export default ProductList;
