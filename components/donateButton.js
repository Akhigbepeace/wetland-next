import { Button } from "@chakra-ui/react";
import React from "react";

const DonateButton = () => {
  return (
    <Button
      bg="#2C4E2A"
      w="154px"
      textAlign="center"
      color="#FFF"
      py="13px"
      ml="97px"
      borderRadius="2px"
      fontFamily="Mulish"
      fontSize="20px"
      fontWeight="700"
      transition="all ease 0.5s"
      _active={{
        bg: "#142413",
      }}
      _hover={{
        bg: "#142413",
      }}
    >
      Donate
    </Button>
  );
};

export default DonateButton;
