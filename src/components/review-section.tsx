import { Box, Text } from "@chakra-ui/react";
import { Product } from "../types/types";
interface ReviewProps {
  product?: Product;
}
export const ReviewSection = ({ product }: ReviewProps) => {
  return (
    <Box mt={8}>
      <Text fontSize="14px" fontWeight="bold" mb={4}>
        Customer Reviews
      </Text>
      {product?.reviews?.map((review: any, index: number) => (
        <Box
          key={index}
          px={8}
          py={4}
          mt={4}
          borderRadius="md"
          bg="white"
          boxShadow="sm"
        >
          <Text fontWeight="bold">{review.reviewerName}</Text>
          <Text fontSize="sm" color="gray.500">
            {new Date(review?.date)?.toLocaleDateString()}
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
  );
};

export default ReviewSection;
