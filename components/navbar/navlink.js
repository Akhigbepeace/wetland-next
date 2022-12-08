import { Flex } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const NavPages = () => {
  const navLinks = [
    {
      name: "Partners",
      to: "/partners",
    },
    {
      name: "Profile",
      to: "/profile",
    },
  ];
  return (
    <Flex>
      {navLinks.map((navLink, index) => {
        return (
          <Link
            key={index}
            href={navLink.to}
            scroll
            style={{
              marginLeft: "65px",
              fontFamily: "Mulish",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            {navLink.name}
          </Link>
        );
      })}
    </Flex>
  );
};

export default NavPages;
