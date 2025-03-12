import React from "react";
//chakra-provider
import { ChakraProvider } from "@chakra-ui/react";
//layout
import Layout from "./components/layout";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
};

export default App;
