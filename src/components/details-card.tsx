//chakra
import { Box, Flex, Text } from "@chakra-ui/react";
//types
import { Product } from "../types/types";
//components
import ImageCardCard from "./image-card";
import ProductDetailsInfo from "./product-details-info";

interface productProps {
  product?: Product;
}

export const ProductDetailsCard = ({ product }: productProps) => {
  return (
    <Box bg={"#fff"}>
      <Flex flexWrap={"wrap"}>
        <ImageCardCard product={product} />

        <ProductDetailsInfo product={product} />
      </Flex>

      <Box padding={6}>
        <Text fontSize="md" color="gray.600">
          {product?.description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductDetailsCard;
