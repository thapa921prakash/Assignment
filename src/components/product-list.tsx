import React, { useState } from "react";
//chakra
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
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
  // Local states
  const [pageIndex, setPageIndex] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch all products
  const { products, loading, error, total } = useFetchProducts();

  // Constants for pagination
  const limit = 10; // Number of products per page

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Total number of pages based on filtered products
  const totalPageIndex = Math.ceil(total / limit);

  // Paginate filtered products
  const paginatedProducts = filteredProducts.slice(
    (pageIndex - 1) * limit,
    pageIndex * limit
  );

  // Handle pagination
  const handleNextPageIndex = () =>
    setPageIndex((prev) => Math.min(prev + 1, totalPageIndex));
  const handlePrevPageIndex = () =>
    setPageIndex((prev) => Math.max(prev - 1, 1));

  // Handle search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPageIndex(1); // Reset to first page when search query changes
  };

  return (
    <ErrorBoundary>
      <Box>
        <Text fontSize={"16px"} fontWeight="bold" textAlign={"center"} mb={6}>
          Product List
        </Text>

        {/* Search Bar */}
        <Input
          bg={"#ffff"}
          placeholder="Search products by title..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          mb={4}
        />

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
        <When condition={!loading && !isEmpty(paginatedProducts)}>
          <Flex flexWrap={"wrap"} gap={4}>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex>

          {/* Pagination Controls */}
          <Flex justifyContent="center" mt={6} gap={4}>
            <Button onClick={handlePrevPageIndex} disabled={pageIndex === 1}>
              <ArrowLeftIcon fontSize={"16px"} />
            </Button>
            <Text>
              {pageIndex} of {totalPageIndex}
            </Text>
            <Button
              onClick={handleNextPageIndex}
              disabled={pageIndex === totalPageIndex}
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
