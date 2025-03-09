import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Flex,
  Image,
  Spinner,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchProductDetails from "../hooks/use-fetch-product-details";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { details, loading, error } = useFetchProductDetails(id ?? "");

  if (loading)
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" />
      </Flex>
    );

  if (error)
    return (
      <Alert status="error" variant="subtle" borderRadius="md" my={4}>
        <AlertIcon />
        Error loading product details.
      </Alert>
    );

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <Box bg={"#fff"}>
        <Flex flexWrap={"wrap"} gap={20}>
          <Box>
            <Image
              src={details?.thumbnail}
              alt={details?.title}
              borderRadius="md"
              w="100%"
              maxH="400px"
              objectFit="cover"
            />
          </Box>

          <Box padding={6}>
            <Text fontSize="14px" fontWeight="bold" color="teal.600">
              {details?.title}
            </Text>

            <Text fontSize="14px" fontWeight="bold" color="teal.500">
              ${details?.price.toFixed(2)}
            </Text>
            <Badge colorScheme="green" fontSize="md">
              {details?.discountPercentage}% OFF
            </Badge>
            <Badge
              colorScheme={
                details?.availabilityStatus === "Low Stock" ? "red" : "green"
              }
              fontSize="md"
            >
              {details?.availabilityStatus}
            </Badge>

            {details?.tags.map((tag: string, index: number) => (
              <Tag key={index} colorScheme="purple" size="md">
                {tag}
              </Tag>
            ))}

            <Text fontSize="sm" color="gray.600">
              Brand: {details?.brand}
            </Text>
            <Text fontSize="sm" color="gray.600">
              SKU: {details?.sku}
            </Text>

            <Text fontSize="sm" color="gray.600">
              Shipping: {details?.shippingInformation}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Warranty: {details?.warrantyInformation}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Return Policy: {details?.returnPolicy}
            </Text>
          </Box>
        </Flex>
        <Box padding={6}>
          <Text fontSize="md" color="gray.600">
            {details?.description}
          </Text>
        </Box>
      </Box>

      <Box mt={8}>
        <Text fontSize="14px" fontWeight="bold" color="teal.600" mb={4}>
          Customer Reviews
        </Text>
        {details?.reviews.map((review: any, index: number) => (
          <Box
            key={index}
            px={8}
            py={4}
            mt={4}
            borderRadius="md"
            bg="white"
            boxShadow="sm"
          >
            <Text fontWeight="bold" color="teal.600">
              {review.reviewerName}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {new Date(review.date).toLocaleDateString()}
            </Text>
            <Text fontSize="md" color="gray.700">
              Rating: {review.rating} / 5
            </Text>
            <Text fontSize="md" color="gray.600">
              {review.comment}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductDetails;
