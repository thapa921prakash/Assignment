//chakra
import { Box, Flex, Text } from "@chakra-ui/react";
//types
import { Product } from "../types/types";
//icons
import { StarIcon } from "@chakra-ui/icons";
interface ReviewProps {
  product?: Product;
}
export const ReviewSection = ({ product }: ReviewProps) => {
  return (
    <Box mt={8}>
      <Text fontSize="14px" fontWeight="bold" mb={4}>
        Customer Reviews
      </Text>
      <Flex gap={2} flexDirection={"column"}>
        {product?.reviews?.map((review: any, index: number) => (
          <Box key={index} p={4} borderRadius="md" bg="white" boxShadow="sm">
            <Text fontWeight="bold">{review.reviewerName}</Text>
            <Text fontSize="sm" color="gray.500">
              {new Date(review?.date)?.toLocaleDateString()} {}
            </Text>

            <Text fontSize="md" color="gray.700">
              Rating
            </Text>
            <Flex align="center">
              <StarIcon color="yellow.400" />
              <Text ml={1} fontSize="sm" color="gray.600">
                {review?.rating} / 5
              </Text>
            </Flex>
            <Text fontSize="md" color="gray.600">
              {review.comment}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ReviewSection;
