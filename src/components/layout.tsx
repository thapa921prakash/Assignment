import React from "react";
//chakra
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box padding="20px" bg={"#EFF0F5"}>
      {children}
    </Box>
  );
};

export default Layout;
