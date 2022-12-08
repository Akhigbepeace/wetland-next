import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://res.cloudinary.com/wavecrest1/image/upload/v1666349401/wetland/logo_yx26cs.png"
        h={{
          sm: "44px",
          md: "64px",
          lg: "84px",
          xl: "101px",
          "2xl": "101px",
        }}
        objectFit="cover"
        _hover={{
          cursor: "pointer",
        }}
      />
    </Link>
  );
};

export default Logo;
