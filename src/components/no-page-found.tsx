//chakar
import { Box, Heading, Text, Image } from "@chakra-ui/react";
//router
import { Link } from "react-router-dom";
//components
import NoPageImage from "../assets/404.png"; // Import the image

const NoPageFound = () => {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Image
        src={NoPageImage}
        alt="404 Page Not Found"
        boxSize="300px"
        mb={6}
      />

      <Heading display="inline-block" as="h1" size="2xl" backgroundClip="text">
        404
      </Heading>
      <Text fontSize="lg" mt={4} mb={6}>
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Link to="/">Go Back Home</Link>
    </Box>
  );
};

export default NoPageFound;
