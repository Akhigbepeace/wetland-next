import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { Fragment, useRef } from "react";

const Hamburger = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
    <Fragment>
      <Box
        onClick={onOpen}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box w="28px" h="3px" bg="#2C4E2A" />
        <Box w="28px" h="3px" bg="#2C4E2A" my="5px" />
        <Box w="28px" h="3px" bg="#2C4E2A" />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#BDE3AB" h="100%">
          <DrawerCloseButton
            bg="#2C4E2A"
            color="white"
            _hover={{
              bg: "#142413",
            }}
          />

          <Flex flexDir="column" mt="25vh">
            <Flex flexDirection="column" alignItems="center">
              {navLinks.map((navLink, index) => {
                return (
                  <Box
                    mb="30px"
                    fontFamily="Mulish"
                    fontSize="24px"
                    fontWeight="400"
                    cursor="pointer"
                  >
                    <Link key={index} href={navLink.to}>
                      {navLink.name}
                    </Link>
                  </Box>
                );
              })}
            </Flex>

            <Button
              bg="#2C4E2A"
              w="154px"
              mx="auto"
              textAlign="center"
              color="#FFF"
              py="13px"
              borderRadius="2px"
              fontFamily="Mulish"
              fontSize="20px"
              fontWeight="700"
              transition="all ease 0.5s"
              _hover={{
                bg: "#142413",
              }}
            >
              Donate
            </Button>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default Hamburger;
