//error-boundary
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
//chakra
import { Box, Text, Button } from "@chakra-ui/react";

const ErrorFallback = ({ error, resetErrorBoundary }: any) => (
  <Box
    p={4}
    borderWidth={1}
    borderRadius="md"
    borderColor="red.500"
    bg="red.50"
    color="red.800"
  >
    <Text fontSize="lg" fontWeight="bold">
      Something went wrong.
    </Text>
    <Text mt={2}>{error.message || "An unexpected error occurred."}</Text>
    <Button mt={4} onClick={resetErrorBoundary}>
      Try Again
    </Button>
  </Box>
);

const ErrorBoundary = ({ children }: any) => (
  <ReactErrorBoundary FallbackComponent={ErrorFallback}>
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;
