import { Box, Center, Flex, Spinner } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import React from "react";
import { When } from "react-if";
import { useParams } from "react-router-dom";
import useFetchProductDetails from "../hooks/use-fetch-product-details";
import { ProductDetailsCard } from "./details-card";
import ErrorBoundary from "./error-boundary";
import ReviewSection from "./review-section";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { details, loading, error } = useFetchProductDetails(id ?? "");

  return (
    <>
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
