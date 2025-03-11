//chakra
import { Badge, Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
//types
import { Product } from "../types/types";
//chakra
import { RouteEnum } from "../enums/route-enum";
//link
import { Link } from "react-router-dom";
//icon
import { StarIcon } from "@chakra-ui/icons"; // Import StarIcon
//react-if
import { When } from "react-if";
//props
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <Link
    to={`/${RouteEnum.product}/${product?.id}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <Box
      w="250px"
      borderRadius="5px"
      bg="white"
      boxShadow="md"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ boxShadow: "14px", transform: "translateY(-5px)" }}
      p={4}
      cursor="pointer"
      mb={2}
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        objectFit="cover"
        w="100%"
        h="150px"
      />
      <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
        {product.title}
      </Text>
      <Text color="gray.600" fontSize="sm" noOfLines={2}>
        {product.description}
      </Text>
      <Flex gap={6} alignItems={"center"} mt={2}>
        <Text fontWeight="bold" color="teal.500" fontSize="14px">
          ${product.price}
        </Text>
        <When condition={product?.discountPercentage}>
          <Badge top={2} right={2} colorScheme="red" borderRadius="full" px={2}>
            {product?.discountPercentage}% OFF
          </Badge>
        </When>
      </Flex>
      <Flex align="center" mt={2}>
        <StarIcon color="yellow.400" />
        <Text ml={1} fontSize="sm" color="gray.600">
          {product.rating}
        </Text>
      </Flex>
    </Box>
  </Link>
);
