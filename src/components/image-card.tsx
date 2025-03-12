//chakra
import { Box, Image } from "@chakra-ui/react";
//types
import { Product } from "../types/types";
//silck
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
//icons
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface productProps {
  product?: Product;
}

export const ImageCardCard = ({ product }: productProps) => {
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
    <Box position="relative" w="100%" maxW="600px" h="400px" overflow="hidden">
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
  );
};

export default ImageCardCard;
