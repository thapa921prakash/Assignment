//chakra
import {
  Box,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";

//react-if
import { When } from "react-if";
//hooks
import useFetchProductDetails from "../hooks/use-fetch-product-details";
//components
import ImageCardCard from "./image-card";
import ProductDetailsInfo from "./product-details-info";

//props
interface ProductCardProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModalView = ({ id, isOpen, onClose }: ProductCardProps) => {
  const { details, loading } = useFetchProductDetails(id ?? "");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg={"#fff"}>
              <When condition={loading}>
                <Center h="100vh">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Center>
              </When>
              <When condition={!loading}>
                <Flex flexWrap={"wrap"} gap={4}>
                  <ImageCardCard product={details} />
                  <ProductDetailsInfo product={details} />
                </Flex>
                <Box padding={2}>
                  <Text fontSize="md" color="gray.600">
                    {details?.description}
                  </Text>
                </Box>
              </When>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
