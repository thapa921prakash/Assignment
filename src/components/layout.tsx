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
        <Box display="flex" height="100vh" background="#EFF0F5">
          <Box flex={1} overflowY={"auto"}>
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

          <Box
            width="300px"
            borderLeft="1px solid #ccc"
            overflowY="auto"
            padding="20px"
          >
            <ProductList />
          </Box>
        </Box>
      </>
    </Router>
  );
};

export default Layout;
