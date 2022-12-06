import { Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="https://res.cloudinary.com/wavecrest1/image/upload/v1666349401/wetland/logo_yx26cs.png"
      w="110px"
      h="101px"
      _hover={{
        cursor: "pointer",
      }}
    />
  );
};

export default Logo;
