import React from "react";
//chakra
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
//lodash
import { isEmpty } from "lodash";
//react-if
import { When } from "react-if";
//react-router-dom
import { useParams } from "react-router-dom";
//hooks
import useFetchProductDetails from "../hooks/use-fetch-product-details";
//ErrorBoundary
import ErrorBoundary from "./error-boundary";
//components
import { ProductDetailsCard } from "./details-card";
import ReviewSection from "./review-section";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { details, loading, error } = useFetchProductDetails(id ?? "");

  return (
    <>
      <When condition={error}>
        <Center h="100vh">
          <Text fontSize="xl" color="red.500">
            Error: {error}
          </Text>
        </Center>
      </When>
      <When condition={loading}>
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
      <When condition={!loading}>
        <ErrorBoundary>
          <Box padding={10}>
            <ProductDetailsCard product={details} />

            <When condition={!isEmpty(details?.reviews)}>
              <ReviewSection product={details} />
            </When>
          </Box>
        </ErrorBoundary>
      </When>
    </>
  );
};

export default ProductDetails;
