import { Badge, Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import { Product } from "../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface productProps {
  product?: Product;
}

export const ProductDetailsCard = ({ product }: productProps) => {
  // Custom Left Arrow Component
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Box
        as="button"
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={onClick}
        _hover={{ color: "teal.500" }}
        cursor={"pointer"}
      >
        <ChevronLeftIcon boxSize={8} color="teal.600" />
      </Box>
    );
  };

  // Custom Right Arrow Component
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Box
        as="button"
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={onClick}
        _hover={{ color: "teal.500" }}
        cursor={"pointer"}
      >
        <ChevronRightIcon boxSize={8} color="teal.600" />
      </Box>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box bg={"#fff"}>
      <Flex flexWrap={"wrap"} gap={20}>
        {/* Carousel Container */}
        <Box
          position="relative"
          w="100%"
          maxW="600px"
          h="400px"
          overflow="hidden"
        >
          <Slider {...settings}>
            {product?.images?.map((i: any) => (
              <Box key={i} w="100%" h="400px" position="relative">
                <Image
                  src={i}
                  alt={i}
                  borderRadius="md"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Product Details */}
        <Box padding={6}>
          <Text fontSize="14px" fontWeight="bold">
            {product?.title}
          </Text>
          <Text fontSize="14px" fontWeight="bold" color="teal.500">
            ${product?.price?.toFixed(2)}
          </Text>
          <Flex direction={"column"} gap={2} mt={2}>
            <Flex gap={2}>
              <Badge colorScheme="green" fontSize="md" w={"fit-content"}>
                {product?.discountPercentage}% OFF
              </Badge>
              <Badge
                colorScheme={
                  product?.availabilityStatus === "Low Stock" ? "red" : "green"
                }
                w={"fit-content"}
                fontSize="sm"
              >
                {product?.availabilityStatus}
              </Badge>
            </Flex>

            <Flex gap={2} wrap={"wrap"} mb={2}>
              {product?.tags.map((tag: string, index: number) => (
                <Tag
                  key={index}
                  colorScheme="purple"
                  size="md"
                  w={"fit-content"}
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Flex>

          <Text fontSize="sm" color="gray.600">
            Brand: {product?.brand}
          </Text>
          <Text fontSize="sm" color="gray.600">
            SKU: {product?.sku}
          </Text>

          <Text fontSize="sm" color="gray.600">
            Shipping: {product?.shippingInformation}
          </Text>
          <Text fontSize="sm" color="gray.600">
            Warranty: {product?.warrantyInformation}
          </Text>
          <Text fontSize="sm" color="gray.600">
            Return Policy: {product?.returnPolicy}
          </Text>
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
