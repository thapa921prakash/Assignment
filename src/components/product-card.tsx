import React from "react";
//chakra
import { Box, Image, Text, VStack } from "@chakra-ui/react";
//types
import { Product } from "../types/types";
//chakra
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { RouteEnum } from "../enums/route-enum";
//props
interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${RouteEnum.product}/${product?.id}`);
  };

  return (
    <Box
      w={"250px"}
      borderRadius={"5px"}
      bg="white"
      boxShadow="md"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
      padding={"4px"}
      cursor={"pointer"}
      mb={"4px"}
      onClick={handleClick}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="full"
        h="150px"
        overflow="hidden"
        borderTopRadius="lg"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          objectFit="cover"
          maxW="100%"
          maxH="100%"
        />
      </Box>
      <VStack p={4} align="stretch" spacing={3}>
        <Text fontWeight="bold" fontSize={"14px"} noOfLines={1}>
          {product.title}
        </Text>
        <Text fontWeight="bold" color="teal.500" fontSize={"14px"}>
          ${product.price}
        </Text>
        <Text color="gray.600" fontSize={"14px"} noOfLines={2}>
          {product.description}
        </Text>
      </VStack>
    </Box>
  );
};
