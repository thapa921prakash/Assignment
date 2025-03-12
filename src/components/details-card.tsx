//chakra
import { Badge, Box, Flex, Tag, Text } from "@chakra-ui/react";
//types
import { Product } from "../types/types";
//utils
import { calculateDiscountedPrice } from "./utils";
//react-if
import { When } from "react-if";
//component
import ImageCardCard from "./image-card";

interface productProps {
  product?: Product;
}

export const ProductDetailsCard = ({ product }: productProps) => {
  return (
    <Box bg={"#fff"}>
      <Flex flexWrap={"wrap"} gap={20}>
        <ImageCardCard product={product} />

        {/* Product Details */}
        <Box padding={6}>
          <Text fontSize="14px" fontWeight="bold">
            {product?.title}
          </Text>
          <When condition={product?.discountPercentage}>
            <Text
              fontSize="14px"
              fontWeight="bold"
              color="teal.500"
              textDecoration={""}
              mt={1}
            >
              <s style={{ marginRight: "8px" }}>
                ${product?.price?.toFixed(2)}
              </s>
            </Text>
          </When>
          <When condition={!product?.discountPercentage}>
            <Text
              fontSize="14px"
              fontWeight="bold"
              color="teal.500"
              textDecoration={""}
              mt={1}
            >
              $ {product?.price?.toFixed(2)}
            </Text>
          </When>

          <Flex direction={"column"} gap={2} mt={1}>
            <Flex gap={2} mt={1}>
              <Text fontSize="14px" fontWeight="bold" color="teal.500">
                ${" "}
                {calculateDiscountedPrice(
                  product?.price ?? 0,
                  product?.discountPercentage ?? 0
                ).toFixed(2)}
              </Text>
              <Badge colorScheme="green" fontSize="md" w={"fit-content"}>
                {product?.discountPercentage}% OFF
              </Badge>
            </Flex>
            <Badge
              colorScheme={
                product?.availabilityStatus === "Low Stock" ? "red" : "green"
              }
              w={"fit-content"}
              fontSize="14px"
              mt={1}
            >
              {product?.availabilityStatus}
            </Badge>

            <Flex gap={2} wrap={"wrap"} mb={2}>
              {product?.tags.map((tag: string, index: number) => (
                <Tag
                  key={index}
                  colorScheme="purple"
                  size="md"
                  w={"fit-content"}
                  mt={1}
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Flex>
          <Flex gap={4} mt={1}>
            <Text fontSize="14px" color="gray.600" w={"160px"}>
              Brand:
            </Text>
            <Text fontSize="14px" fontWeight={500} color="gray.600">
              {product?.brand}
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text fontSize="14px" color="gray.600" w={"160px"}>
              SKU
            </Text>
            <Text fontSize="14px" fontWeight={500} color="gray.600">
              {product?.sku}
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text fontSize="14px" color="gray.600" w={"160px"}>
              Minimum order quantity:
            </Text>
            <Text fontSize="14px" fontWeight={500} color="gray.600">
              {product?.minimumOrderQuantity}
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text fontSize="14px" color="gray.600" w={"160px"}>
              Shipping:
            </Text>
            <Text fontSize="14px" fontWeight={500} color="gray.600">
              {product?.shippingInformation}
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text fontSize="14px" color="gray.600" w={"160px"}>
              Warranty:
            </Text>
            <Text fontSize="14px" fontWeight={500} color="gray.600">
              {product?.warrantyInformation}
            </Text>
          </Flex>
          <Flex gap={4}>
            <Text fontSize="14px" color="gray.600" w={"160px"}>
              Return Policy:
            </Text>
            <Text fontSize="14px" fontWeight={500} color="gray.600">
              {product?.returnPolicy}
            </Text>
          </Flex>
        </Box>
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
