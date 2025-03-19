//router
import { Link } from "react-router-dom";
//chakra
import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
//types
import { Product } from "../types/types";
//chakra
import { RouteEnum } from "../enums/route-enum";
//icon
import { StarIcon } from "@chakra-ui/icons"; // Import StarIcon
//react-if
import { When } from "react-if";
//utils
import { calculateDiscountedPrice } from "./utils";
//components
import { ProductModalView } from "./product-modal-view";
//props
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false }); // Check if it's mobile view

  const handleProductClick = () => {
    if (isMobile) {
      // Open modal if on mobile
      onOpen();
    }
  };

  return (
    <>
      <Box
        w={{ base: "full", md: "250px" }}
        borderRadius="5px"
        bg="white"
        boxShadow="md"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{ boxShadow: "14px", transform: "translateY(-5px)" }}
        p={4}
        cursor="pointer"
        onClick={handleProductClick}
      >
        <Link to={`/${RouteEnum.product}/${product?.id}`}>
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
          <Text fontWeight="bold" color="teal.500" fontSize="14px" mt={2}>
            ${" "}
            {calculateDiscountedPrice(
              product?.price ?? 0,
              product?.discountPercentage ?? 0
            ).toFixed(2)}
          </Text>
          <Flex gap={6} alignItems={"center"}>
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
            <When condition={product?.discountPercentage}>
              <Badge
                top={2}
                right={2}
                colorScheme="red"
                borderRadius="full"
                px={2}
              >
                {product?.discountPercentage}% OFF
              </Badge>
            </When>
          </Flex>
          <Flex align="center" mt={2}>
            <StarIcon color="yellow.400" />
            <Text ml={1} fontSize="sm" color="gray.600">
              {product?.rating}
            </Text>
          </Flex>
        </Link>
      </Box>

      {/* Modal for Mobile View */}
      <ProductModalView id={product?.id} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
