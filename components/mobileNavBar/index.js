import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../logo";
import Hamburger from "../hamburger";

const MobileSideBar = () => {
  return (
    <Flex
      w={{
        sm: "300px",
        md: "600px",
        lg: "800px",
        xl: "1200px",
        "2xl": "1300px",
      }}
      m="18px auto"
      justifyContent="space-between"
      alignItems="center"
      zIndex="6"
      display={{
        sm: "flex",
        md: "flex",
        lg: "flex",
        xl: "none",
        "2xl": "none",
      }}
    >
      <Logo />

      <Hamburger />
    </Flex>
  );
};

export default MobileSideBar;
