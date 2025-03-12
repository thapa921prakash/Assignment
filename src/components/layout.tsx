import React from "react";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import ProductDetails from "./product-details";
import ProductList from "./product-list";
//chakra
import { Box, Center, Text } from "@chakra-ui/react";
//enums
import { RouteEnum } from "../enums/route-enum";

const Layout: React.FC = () => {
  return (
    <Router>
      <>
        {/* Main container with responsive flexDirection */}
        <Box
          display="flex"
          height="100vh"
          background="#EFF0F5"
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* Main content area */}
          <Box
            flex={1}
            overflowY={"auto"}
            padding="20px"
            display={{ base: "none", md: "block" }}
          >
            <Routes>
              <Route
                path={`/${RouteEnum.product}/:id`}
                element={<ProductDetails />}
              />
              <Route
                path="*"
                element={
                  <Center height="100%">
                    <Text fontSize="xl" color="gray.600" textAlign="center">
                      Please select a product from the list.
                    </Text>
                  </Center>
                }
              />
            </Routes>
          </Box>

          {/* Product list area */}
          <Box
            width={{ base: "100%", md: "300px" }} // Full width on mobile, fixed width on desktop
            borderLeft={{ base: "none", md: "1px solid #ccc" }}
            overflowY="auto"
            padding="20px"
            order={{ base: 1, md: 2 }} // Show this above the product details on mobile
          >
            <ProductList />
          </Box>
        </Box>
      </>
    </Router>
  );
};

export default Layout;
